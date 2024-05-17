const Zipcode = require("../../app/models/Zipcode");

class ZipcodeService {
  static async list(params = {}) {
    const countries = await Zipcode.findAll(params);
    return countries;
  }
  static async find(id) {
    const country = await Zipcode.findOne(id);
    return country;
  }
}

module.exports = ZipcodeService;
