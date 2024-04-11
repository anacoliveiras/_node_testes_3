module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "import/extensions": 0,
    "prefer-destructuring": 0,
    "no-underscore-dangle": 0,
    quotes: ["error", "double"]
  },
  overrides: [
    {
      files: ["*.test.js"],
      env: {
        jest: true
      }
    }
  ]
};
