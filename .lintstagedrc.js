module.exports = {
  "*.{js, jsx, ts, tsx}": (filenames) => {
    return [
      `prettier --write ${filenames.join(" ")}`,
      `npm run lint --fix . ${filenames.join(" --file")}`,
      `npm run test -- --findRelatedTests ${filenames.join(" ")}`,
    ];
  },
};
