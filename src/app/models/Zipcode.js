const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/database");

const State = require("./State");

const Zipcode = sequelize.define(
  "Zipcode",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    zipcode: {
      type: DataTypes.STRING,
    },
    zipcode: {
      type: DataTypes.STRING,
    },
    settlement: {
      type: DataTypes.STRING,
    },
    municipality: {
      type: DataTypes.STRING,
    },
    city: {
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
  {
    tableName: "zipcodes",
    defaultScope: {
      attributes: {
        exclude: ["state_id"],
      },
    },
  }
);

Zipcode.belongsTo(State, {
  as: "state",
  foreignKey: {
    name: "state_id",
  },
});

module.exports = Zipcode;
