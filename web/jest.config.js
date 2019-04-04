const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig");

module.exports = {
  // globals: {
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/setupJest.js"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["js", "ts", "tsx"],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths),
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.test.json",
    },
  },
  // },
};
