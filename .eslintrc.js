module.exports = {
  // extends: ['eslint:recommended', 'airbnb-base'],
  extends: ['eslint:recommended'],
  parser: 'babel-eslint',
  plugins: ['import'],
  settings: {
    "import/resolver": {
      "babel-module": {}
    }
  },
  env: {
    node: true,
    es6: true
  },
  rules: {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
        "error",
        "unix"
    ],
    "quotes": [
        "error",
        "single"
    ],
    "semi": [
        "error",
        "never"
    ],
    "no-console": 0,
    "comma-dangle": 0
    }
}
