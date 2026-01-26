const { execSync } = require('child_process');
const ghPages = require('gh-pages');

const DIST_DIR = 'dist';
const BRANCH = 'gh-pages';
const SOURCE_BRANCH = 'master';

console.log('Starting Deployment...');

try {
	const currentBranch = execSync('git branch --show-current').toString().trim();
	if (currentBranch !== SOURCE_BRANCH) {
		console.error(
			`Error: You are on '${currentBranch}'. Please switch to '${SOURCE_BRANCH}' to deploy.`
		);
		process.exit(1);
	}
} catch (e) {
	console.error('Error checking current branch:', e.message);
	process.exit(1);
}

try {
	const status = execSync('git status --porcelain').toString();
	if (status) {
		console.error('Error: Git status is not clean. Please commit or stash changes.');
		process.exit(1);
	}
} catch (e) {
	console.error('Error checking git status:', e.message);
	process.exit(1);
}

console.log('Checking remote sync status...');
try {
	execSync(`git fetch origin ${SOURCE_BRANCH}`, { stdio: 'ignore' });

	const localCommit = execSync('git rev-parse HEAD').toString().trim();
	const remoteCommit = execSync(`git rev-parse origin/${SOURCE_BRANCH}`).toString().trim();

	if (localCommit !== remoteCommit) {
		console.error('Error: Local branch is not in sync with remote.');
		console.error(`Local:  ${localCommit}`);
		console.error(`Remote: ${remoteCommit}`);
		console.error('Please run "git push" (or pull) before deploying.');
		process.exit(1);
	}
} catch (e) {
	console.error('Error checking remote status:', e.message);
	process.exit(1);
}

const commitHash = execSync('git rev-parse HEAD').toString().trim();
console.log(`Source Commit: ${commitHash}`);

const date = new Date();
const prefix = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}`;
let newTag = `${prefix}.0`;

try {
	const tags = execSync(`git tag --list "${prefix}.*" --sort=-v:refname`).toString().split('\n');
	const latestTag = tags[0];

	if (latestTag) {
		const lastPatch = parseInt(latestTag.split('.').pop(), 10);
		newTag = `${prefix}.${lastPatch + 1}`;
	}
} catch (e) {
	console.warn('Could not fetch tags, defaulting to .0');
}

try {
	execSync(`git rev-parse "${newTag}"`, { stdio: 'ignore' });
	console.error(`Error: Tag ${newTag} already exists.`);
	console.error('This usually means a race condition or a previous run failed halfway.');
	console.error('Try running the script again to generate the next tag.');
	process.exit(1);
} catch (e) {
	console.log(`Target Tag: ${newTag} (Available)`);
}

try {
	console.log('Pushing tag to remote...');
	execSync(`git tag -a "${newTag}" -m "Release ${newTag}"`);
	execSync(`git push origin "${newTag}"`);
} catch (e) {
	console.error('Error creating/pushing tag:', e.message);
	process.exit(1);
}

console.log('Publishing to gh-pages...');
ghPages.publish(
	DIST_DIR,
	{
		branch: BRANCH,
		message: `Deploy: ${newTag} | Commit: ${commitHash}`,
		dotfiles: true,
		history: false,
	},
	(err) => {
		if (err) {
			console.error('Deployment Failed:', err);
			process.exit(1);
		} else {
			console.log(`Success! Deployed ${newTag} (${commitHash})`);
		}
	}
);
