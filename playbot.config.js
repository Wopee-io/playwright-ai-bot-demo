const config = {
  baseUrl: "https://dronjo.wopee.io",
  aiModel: "gpt-4o-mini",
  apiKey: process.env.OPENAI_API_KEY || "",
  // framework: "playwright", // Not implemented yet (TODO): playwright, cypress, robot-framework, webdriver-io
  frameworkPath: "tests",
  analysisPath: "playbot-data",

  // dryRun: true
};

// CommonJS export = type: "commonjs" in package.json (default behavior)
module.exports = config;

// ES Module export = type: "module" in package.json
// export default config;
