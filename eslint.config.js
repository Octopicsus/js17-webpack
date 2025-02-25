import airbnbBase from "eslint-config-airbnb-base";
import importPlugin from "eslint-plugin-import";

export default {
  root: true,
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globals: {
      browser: true,
      node: true
    }
  },
  extends: ["airbnb-base"],
  plugins: [importPlugin],
  rules: {
    ...airbnbBase.rules,
    "no-console": "off",
    indent: ["error", 2],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "comma-dangle": ["error", "never"],
    "no-unused-vars": ["warn"],
    eqeqeq: ["error", "always"],
    "import/extensions": "off",
    "no-use-before-define": "off",
    "import/prefer-default-export": "off"
  }
};