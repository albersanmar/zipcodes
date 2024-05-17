class Env {
  static get(name) {
    return process.env[name];
  }
}

module.exports = Env;
