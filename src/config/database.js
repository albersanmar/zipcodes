const Env = require("./env");

const { Sequelize } = require("sequelize");

const host = Env.get("DB_HOST");
const port = Env.get("DB_PORT");
const user = Env.get("DB_USER");
const pass = Env.get("DB_PASS");
const db = Env.get("DB_NAME");

const sequelize = new Sequelize(db, user, pass, {
  host: host,
  port: port,
  dialect: "postgres",
});

module.exports = {
  sequelize,
};
