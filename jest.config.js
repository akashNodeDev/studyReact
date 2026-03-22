/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",

  testEnvironment: "jsdom",

  // ✅ THIS IS THE FIX
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  setupFiles: ["<rootDir>/jest.setup.js"],
};

module.exports = config;
