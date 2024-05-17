const ZipcodeService = require("../services/zipcodes_service");

class ZipcodeController {
  static async show(req, res) {
    const zipcode = await ZipcodeService.list({
      where: {
        zipcode: req.params.zipcode,
      },
      include: [
        {
          association: "state",
        },
      ],
    });
    res.send({
      zipcodes: zipcode,
    });
  }
}

module.exports = ZipcodeController;
