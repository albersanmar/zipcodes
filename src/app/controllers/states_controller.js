const StateService = require("../services/states_service");

class StateController {
  static async index(req, res) {
    const states = await StateService.list();
    res.send({
      states: states,
    });
  }
}

module.exports = StateController;
