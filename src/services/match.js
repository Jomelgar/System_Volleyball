const MOCK = require('../mock/match');

const getMatches = async () => {
  return MOCK;
};

const getMatchById = async (id) => {
  return MOCK.find((it) => it.id === id);
};


const createMatch = async (match) => {
  const newMatch = {
    id: MOCK.length + 1,
    ...match
  };

  MOCK.push(newMatch);
  return newMatch;
};

const deleteMatch = async (id) => {
  const index = MOCK.findIndex((it) => it.id === id);

  if (index === -1) return false;

  MOCK.splice(index, 1);
  return true;
};

const updateMatch = async (id, updates) => {
  const match = MOCK.find((it) => it.id === id);

  if (!match) return null;

  Object.assign(match, updates);
  return match;
};

module.exports = {
  getMatches,
  getMatchById,
  createMatch,
  deleteMatch,
  updateMatch
};