module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  // 表示测试的文件类型有哪些
  transform: {
    "^.+\\.vue$": "vue-jest",
    // 通过vue-jest这个文件来处理vue文件
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    // 通过jest-transform-stub这个包去处理静态文件
    "^.+\\.jsx?$": "babel-jest"
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
    // 就是定义了@符号作为src的相对路径，在写sec的相对路径的时候用@符号来代替
  },
  snapshotSerializers: ["jest-serializer-vue"],
  // 生成快照格式化的一个工具
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
  ],
  // 指定那些文件进行单元测试
  testURL: "http://localhost/",
  // 指定测试文件路径,因为做单元测试的时候还是在DOM上做的
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ]
};
