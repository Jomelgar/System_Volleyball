const service = require('../services/tournament');

const getTournaments = async (req, res) => {
  const data = await service.getTournamentes();
  res.json(data);
};

const getTournamentById = async (req, res) => {
  const id = Number(req.params.id);

  const data = await service.getTournamentById(id);

  if (!data) {
    return res.status(404).json({
      message: 'Tournament not found'
    });
  }

  res.json(data);
};

const createTournament = async (req, res) => {
  const newTournament = req.body;

  const data = await service.createTournament(newTournament);

  res.status(201).json(data);
};

const deleteTournament = async (req, res) => {
  const id = Number(req.params.id);

  const deleted = await service.deleteTournament(id);

  if (!deleted) {
    return res.status(404).json({ message: 'Tournament not found' });
  }

  res.json({ message: 'Tournament deleted' });
};

const updateTournament = async (req, res) => {
  const id = Number(req.params.id);
  const updates = req.body;

  const updated = await service.updateTournament(id, updates);

  if (!updated) {
    return res.status(404).json({ message: 'Tournament not found' });
  }

  res.json(updated);
};

module.exports = {
  getTournaments,
  getTournamentById,
  createTournament,
  deleteTournament,
  updateTournament
};