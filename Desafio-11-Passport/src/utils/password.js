const bcrypt = require("bcrypt");

const validatePassword = (user, password) => {
  return bcrypt.compareSync(password, user.password);
};

const hash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

module.exports = { validatePassword, hash };
