import { execFile } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';

const B = 1;
const KiB = 1024 * B;
const MiB = 1024 * KiB;

const COMPRESSED_INITIAL_LIMIT = 500 * KiB;
const COMPRESSED_SIZE_STEP = 100 * KiB;

const THUMBNAIL_INITIAL_LIMIT = 30 * KiB;
const THUMBNAIL_SIZE_STEP = 10 * KiB;
const THUMBNAIL_WIDTH = 240;

const MIN_QUALITY = 30;
const MAX_QUALITY = 95;
const QUALITY_STEP = 5;

const MAX_LIMIT = 4 * MiB;

const execFileAsync = promisify(execFile);

async function fileExists(filePath: string): Promise<boolean> {
	try {
		await fs.access(filePath);
		return true;
	} catch {
		return false;
	}
}

async function compressToBuffer(
	inputPath: string,
	startLimit: number,
	stepSize: number,
	resizeWidth?: number,
): Promise<{ buffer: Buffer; finalQuality: number; achievedLimit: number }> {
	let currentLimit = startLimit;
	while (currentLimit <= MAX_LIMIT) {
		for (let quality = MAX_QUALITY; quality >= MIN_QUALITY; quality -= QUALITY_STEP) {
			const args: string[] = [inputPath, '-auto-orient'];
			if (resizeWidth) {
				args.push('-resize', `${resizeWidth}x`);
			}
			args.push('-quality', quality.toString(), 'webp:-');
			const { stdout } = await execFileAsync('magick', args, {
				encoding: 'buffer',
				maxBuffer: 100 * MiB,
			});
			if (stdout.length <= currentLimit) {
				return {
					buffer: stdout,
					finalQuality: quality,
					achievedLimit: currentLimit,
				};
			}
		}

		currentLimit += stepSize;
	}

	throw new Error(`Unable to compress ${inputPath} within limits.`);
}

async function processDirectory(inDir: string, outDir: string, concurrency = 4) {
	await fs.mkdir(outDir, { recursive: true });

	const files = await fs.readdir(inDir);
	const imageRegex = /\.(jpe?g|heic)$/i;

	const queue = files.filter((f) => imageRegex.test(f));

	console.log(`Found ${queue.length} images to check.`);

	async function worker() {
		while (queue.length > 0) {
			const file = queue.pop();
			if (!file) break;

			const inputPath = path.join(inDir, file);
			const { name } = path.parse(file);

			const compressedPath = path.join(outDir, `${name}_compressed.webp`);
			const thumbnailPath = path.join(outDir, `${name}_thumbnail.webp`);

			const [hasCompressed, hasThumbnail] = await Promise.all([
				fileExists(compressedPath),
				fileExists(thumbnailPath),
			]);

			if (!hasCompressed) {
				try {
					const { buffer, finalQuality, achievedLimit } = await compressToBuffer(
						inputPath,
						COMPRESSED_INITIAL_LIMIT,
						COMPRESSED_SIZE_STEP,
					);
					await fs.writeFile(compressedPath, buffer);
					console.log(
						`✔ Created: ${name}_compressed.webp | ${(buffer.length / KiB).toFixed(1)} KiB (Target: <=${(achievedLimit / KiB).toFixed(1)}KiB @ Q${finalQuality})`,
					);
				} catch (err) {
					console.error(`✖ Failed compressed image for ${file}:`, err);
				}
			} else {
				console.log(`➜ Skipped existing: ${name}_compressed.webp`);
			}

			if (!hasThumbnail) {
				try {
					const { buffer, finalQuality, achievedLimit } = await compressToBuffer(
						inputPath,
						THUMBNAIL_INITIAL_LIMIT,
						THUMBNAIL_SIZE_STEP,
						THUMBNAIL_WIDTH,
					);
					await fs.writeFile(thumbnailPath, buffer);
					console.log(
						`✔ Created: ${name}_thumbnail.webp | ${(buffer.length / KiB).toFixed(1)} KiB (Target: <=${(achievedLimit / KiB).toFixed(1)}KiB @ Q${finalQuality})`,
					);
				} catch (err) {
					console.error(`✖ Failed thumbnail for ${file}:`, err);
				}
			} else {
				console.log(`➜ Skipped existing: ${name}_thumbnail.webp`);
			}
		}
	}

	const pool = Array.from({ length: concurrency }, () => worker());
	await Promise.all(pool);
}

processDirectory(
	'/home/cshubh/Documents/share/gram',
	'/home/cshubh/src/website/src/assets/images/gram',
	8,
);
