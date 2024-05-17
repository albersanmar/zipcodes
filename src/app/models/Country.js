const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/database");

const Country = sequelize.define(
  "Country",
  {
    isoNum: {
      type: DataTypes.INTEGER,
      field: "iso_num",
      primaryKey: true,
    },
    isoAlpha2: {
      type: DataTypes.INTEGER,
      field: "iso_alpha2",
    },
    isoAlpha3: {
      type: DataTypes.INTEGER,
      field: "iso_alpha3",
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
  { tableName: "countries" }
);

module.exports = Country;
