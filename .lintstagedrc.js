module.exports = {
  "*.{js, jsx, ts, tsx}": () => {
    return [`prettier --write`, `npm run lint --fix`, `npm run test`];
  },
};
