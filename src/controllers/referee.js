const service = require('../services/referee');

const getReferees = async (req, res) => {
  const data = await service.getReferees();
  res.json(data);
};

const getRefereeById = async (req, res) => {
  const id = Number(req.params.id);

  const data = await service.getRefereeById(id);

  if (!data) {
    return res.status(404).json({
      message: 'Referee not found'
    });
  }

  res.json(data);
};

const createReferee = async (req, res) => {
  const newReferee = req.body;

  const data = await service.createReferee(newReferee);

  res.status(201).json(data);
};

const deleteReferee = async (req, res) => {
  const id = Number(req.params.id);

  const deleted = await service.deleteReferee(id);

  if (!deleted) {
    return res.status(404).json({ message: 'Referee not found' });
  }

  res.json({ message: 'Referee deleted' });
};

const updateReferee = async (req, res) => {
  const id = Number(req.params.id);
  const updates = req.body;

  const updated = await service.updateReferee(id, updates);

  if (!updated) {
    return res.status(404).json({ message: 'Referee not found' });
  }

  res.json(updated);
};

module.exports = {
  getReferees,
  getRefereeById,
  createReferee,
  deleteReferee,
  updateReferee
};