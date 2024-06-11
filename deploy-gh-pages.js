const subProcess = require("child_process");
const ghpages = require("gh-pages");

const lastCommitCommand = "git log -1 --pretty=format:%H";
subProcess.exec(lastCommitCommand, (error, stdout, stderr) => {
  if (error) return console.log(`error: ${error.message}`);
  if (stderr) return console.log(`stderr: ${stderr}`);
  ghpages.publish(
    "out",
    { message: `build from ${stdout.trim()}`, dotfiles: true },
    (err) => err && console.log(err)
  );
});
