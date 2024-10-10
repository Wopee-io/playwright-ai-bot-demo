const config = {
  baseUrl: "https://dronjo.wopee.io",
  aiModel: "gpt-4o-mini",
  apiKey: process.env.OPENAI_API_KEY || "",
  frameworkPath: "tests",
  analysisPath: "playbot-data",
};

module.exports = config;