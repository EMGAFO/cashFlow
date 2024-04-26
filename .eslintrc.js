module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    /*     "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off", */
    //indent: "error",
    // Deshabilitar la regla vue/multi-word-component-names
    "vue/multi-word-component-names": "off",
  },
};
