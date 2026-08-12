const MOCK = require('../mock/tournament');

const getTournaments = async () => {
  return MOCK;
};

const getTournamentById = async (id) => {
  return MOCK.find((it) => it.id === id);
};


const createTournament = async (Tournament) => {
  const newTournament = {
    id: MOCK.length + 1,
    ...Tournament
  };

  MOCK.push(newTournament);
  return newTournament;
};

const deleteTournament = async (id) => {
  const index = MOCK.findIndex((it) => it.id === id);

  if (index === -1) return false;

  MOCK.splice(index, 1);
  return true;
};

const updateTournament = async (id, updates) => {
  const Tournament = MOCK.find((it) => it.id === id);

  if (!Tournament) return null;

  Object.assign(Tournament, updates);
  return Tournament;
};

module.exports = {
  getTournaments,
  getTournamentById,
  createTournament,
  deleteTournament,
  updateTournament
};