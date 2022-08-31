const bcrypt = require("bcryptjs");

const password = "dev-test-password";
const hashedPassword = bcrypt.hashSync(password, 10);

const users = [
  {
    username: "dev-test",
    password: hashedPassword,
    role: "admin",
  },
  {
    username: "meryem",
    password: hashedPassword,
    role: "admin",
  },
  {
    username: "charlotte",
    password: hashedPassword,
    role: "admin",
  },
];

module.exports = users;
