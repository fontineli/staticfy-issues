try {
  // `folder-name` input defined in action metadata file
  const folderName = core.getInput("folder-name");
  const fileName = folderName + "/test.md";
  console.log(`This will be the folder name: ${folderName}!`);
  const time = new Date().toTimeString();
  core.setOutput("time", time);
  core.setOutput("fileName", fileName);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}