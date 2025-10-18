import { getUserActivity } from "./api.js";
function runCLI() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log("Usage: github-activity <username>");
    process.exit(1);
  }

  const username = args[0];
  getUserActivity(username).then((data) => console.log(data));
  console.log(`Fetching activity for: ${username}...`);
}

export default runCLI;
