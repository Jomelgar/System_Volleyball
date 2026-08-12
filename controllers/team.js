const teamService = require("../services/player");

const getAll = (req, res) => {
  const { equipoId } = req.query;
  const teams = equipoId
    ? teamService.getByEquipo(equipoId)
    : teamService.getAll();
  res.status(200).json(teams);
};

const getById = (req, res) => {
  const player = teamService.getById(req.params.id);
  if (!team) return res.status(404).json({ message: "Equipo no encontrado" });
  res.status(200).json(player);
};

const create = (req, res) => {
  const { nombre, numero, posicion, equipoId } = req.body;
  if (!nombre || !numero || !posicion || !equipoId) {
    return res.status(400).json({
      message: "nombre, numero, posicion y equipoId son obligatorios",
    });
  }
  const team = teamService.create({ nombre, numero, posicion, equipoId });
  res.status(201).json(player);
};

const update = (req, res) => {
  const team = teamService.update(req.params.id, req.body);
  if (!team) return res.status(404).json({ message: "Equipo no encontrado" });
  res.status(200).json(team);
};

const remove = (req, res) => {
  const deleted = teamService.remove(req.params.id);
  if (!deleted)
    return res.status(404).json({ message: "Equipo no encontrado" });
  res.status(204).send();
};

module.exports = { getAll, getById, create, update, remove };
