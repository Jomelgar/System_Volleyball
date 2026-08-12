const service = require('../services/match');

const getMatches = async (req, res) => {
  const data = await service.getMatches();
  res.json(data);
};

const getMatchById = async (req, res) => {
  const id = Number(req.params.id);

  const data = await service.getMatchById(id);

  if (!data) {
    return res.status(404).json({
      message: 'Match not found'
    });
  }

  res.json(data);
};

const createMatch = async (req, res) => {
  const newMatch = req.body;

  const data = await service.createMatch(newMatch);

  res.status(201).json(data);
};

const deleteMatch = async (req, res) => {
  const id = Number(req.params.id);

  const deleted = await service.deleteMatch(id);

  if (!deleted) {
    return res.status(404).json({ message: 'Match not found' });
  }

  res.json({ message: 'Match deleted' });
};

const updateMatch = async (req, res) => {
  const id = Number(req.params.id);
  const updates = req.body;

  const updated = await service.updateMatch(id, updates);

  if (!updated) {
    return res.status(404).json({ message: 'Match not found' });
  }

  res.json(updated);
};

module.exports = {
  getMatches,
  getMatchById,
  createMatch,
  deleteMatch,
  updateMatch
};