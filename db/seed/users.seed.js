// Iteration #1
const mongoose = require("mongoose");
const User = require("../../server/models/User.model");
const bcrypt = require("bcryptjs");

const password = "dev-test-password";
const hashedPassword = bcrypt.hashSync(password, 10);
const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/women-of-hip-hop";

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

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
const seedUser = async () => {
  await User.deleteMany({});
  await User.insertMany(users);
};
seedUser().then(() => {
  mongoose.connection.close();
});
