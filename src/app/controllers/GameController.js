const Game = require('../models/Game');

class Gamecontroller {
  async store(req, res) {
    const game = await Game.create({ ...req.body });
    return res.json(game);
  }

  async index(req, res) {
    const games = await Game.find();

    return res.json(games);
  }

  async show(req, res) {
    const game = await Game.findById(req.params.id);
    return res.json(game);
  }

  async update(req, res) {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(game);
  }

  async delete(req, res) {
    const game = await Game.findByIdAndDelete(req.params.id);
    return res.json();
  }
}

module.exports = new Gamecontroller();
