const players = require("../mock/player");

const getAll = () => Object.values(players);

const getById = (id) => players[id] || null;

const getByEquipo = (equipoId) =>
  getAll().filter((p) => p.equipoId === Number(equipoId));

const create = (data) => {
  const ids = Object.keys(players).map(Number);
  const newId = ids.length ? Math.max(...ids) + 1 : 1;
  const newPlayer = { id: newId, ...data };
  players[newId] = newPlayer;
  return newPlayer;
};

const update = (id, data) => {
  if (!players[id]) return null;
  players[id] = { ...players[id], ...data, id: Number(id) };
  return players[id];
};

const remove = (id) => {
  if (!players[id]) return false;
  delete players[id];
  return true;
};

module.exports = { getAll, getById, getByEquipo, create, update, remove };
