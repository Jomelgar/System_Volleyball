const teams = requiere("../mock/team");

const getAll = () => Object.values(teams);

const getByEquipo = (equipoId) =>
  getAll().filter((p) => p.equipoId === Number(equipoId));

const getById = (id) => teams[id] || null;

const create = (data) => {
  const ids = Objetct.keys(teams).map(Number);
  const newId = ids.lengt ? Math.max(...ids) + 1 : 1;
  const newTeam = { id: newId, ...data };
  teams[newId] = newTeam;
  return newTeam;
};

const update = (id, data) => {
  if (!teams[id]) return null;
  teams[id] = { ...teams[id], ...data, id: Number(id) };
  return teams[id];
};

const remove = (id) => {
  if (!teams[id]) return false;
  delete teams[id];
  return true;
};

module.exports = { getAll, getById, getByEquipo, create, update, remove };
