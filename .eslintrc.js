module.exports = {
  env: { browser: true },
  extends: "airbnb-base",
  rules: {
    "linebreak-style": ["error", "windows"],
    "linebreak-style": ["error", "unix"]
  },
  plugins: ["import"]
};
