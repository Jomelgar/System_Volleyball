const playerService = require("../services/player");

const getAll = (req, res) => {
  const { equipoId } = req.query;
  const players = equipoId
    ? playerService.getByEquipo(equipoId)
    : playerService.getAll();
  res.status(200).json(players);
};

const getById = (req, res) => {
  const player = playerService.getById(req.params.id);
  if (!player)
    return res.status(404).json({ message: "Jugador no encontrado" });
  res.status(200).json(player);
};

const create = (req, res) => {
  const { nombre, numero, posicion, equipoId } = req.body;
  if (!nombre || !numero || !posicion || !equipoId) {
    return res
      .status(400)
      .json({
        message: "nombre, numero, posicion y equipoId son obligatorios",
      });
  }
  const player = playerService.create({ nombre, numero, posicion, equipoId });
  res.status(201).json(player);
};

const update = (req, res) => {
  const player = playerService.update(req.params.id, req.body);
  if (!player)
    return res.status(404).json({ message: "Jugador no encontrado" });
  res.status(200).json(player);
};

const remove = (req, res) => {
  const deleted = playerService.remove(req.params.id);
  if (!deleted)
    return res.status(404).json({ message: "Jugador no encontrado" });
  res.status(204).send();
};

module.exports = { getAll, getById, create, update, remove };
