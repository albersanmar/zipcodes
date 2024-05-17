const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/database");

const State = sequelize.define(
  "State",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created_at",
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updated_at",
    },
  },
  { tableName: "states" }
);

module.exports = State;
