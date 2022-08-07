/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // jest.config.js
  // 配置 浏览器的 API
  testEnvironment: "jest-environment-jsdom-global",
  // 注意，这里 ts-jest 一定要和 jest 的大版本一致！ 比如 27 对 27，或者 26 对 26，否则会有兼容问题！
  // 配置 module 引入方式
  preset: "ts-jest",
  // 自动清除 Mock
  clearMocks: true,
  // 使用的引擎
  coverageProvider: "v8",
  // 需要在所有测试环境中可用的一组全局变量
  globals: {
    "ts-jest": {
      // 指定ts config文件
      tsconfig: "./tsconfig.json",
      // 使用esm而非commonjs 使用 import
      useESM: true,
    },
  },
  // 模块使用的N个文件扩展名数组
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],
  // 项目别名
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
};
