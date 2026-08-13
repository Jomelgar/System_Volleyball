const MOCK = require('../mock/referee');

const getReferees = async () => {
  return MOCK;
};

const getRefereeById = async (id) => {
  return MOCK.find((it) => it.id === id);
};


const createReferee = async (Referee) => {
  const newReferee = {
    id: MOCK.length + 1,
    ...Referee
  };

  MOCK.push(newReferee);
  return newReferee;
};

const deleteReferee = async (id) => {
  const index = MOCK.findIndex((it) => it.id === id);

  if (index === -1) return false;

  MOCK.splice(index, 1);
  return true;
};

const updateReferee = async (id, updates) => {
  const Referee = MOCK.find((it) => it.id === id);

  if (!Referee) return null;

  Object.assign(Referee, updates);
  return Referee;
};

module.exports = {
  getReferees,
  getRefereeById,
  createReferee,
  deleteReferee,
  updateReferee
};