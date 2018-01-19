const OFF = 0;
const ERROR = 2;

module.exports = {
  extends: ['eslint:recommended'],
  plugins: ['react'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    "react/jsx-uses-react": ERROR,
    "react/jsx-uses-vars": ERROR
  }
}
