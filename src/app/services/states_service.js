const State = require("../../app/models/State");

class StatesService {
  static async list() {
    const states = await State.findAll({
      order: [
        ['id', 'ASC']
      ]
    });
    return states;
  }
  static async find(id) {
    const state = await State.findOne();
    return state;
  }
}

module.exports = StatesService;
