const CountriesService = require("../services/countries_service");

class CountriesController {
  static async index(req, res) {
    const countries = await CountriesService.list();
    res.send({
      countries: countries,
    });
  }
  static async show(req, res) {
    const country = await CountriesService.find(req.params.countryId);
    res.send({
      country: country,
    });
  }
}

module.exports = CountriesController;
