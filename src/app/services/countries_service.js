const Country = require("../../app/models/Country");

class CountriesService {
  static async list() {
    const countries = await Country.findAll();
    return countries;
  }
  static async find(id) {
    const country = await Country.findOne();
    return country;
  }
}

module.exports = CountriesService;
