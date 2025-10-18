function runCLI() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log("Usage: github-activity <username>");
    process.exit(1);
  }

  const username = args[0];
  console.log(`Fetching activity for: ${username}...`);
}

export default runCLI;
