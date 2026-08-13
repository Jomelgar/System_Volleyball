const service = require('../services/character');

const getCharacters = async (req, res) => {
  const { page, limit, name } = req.query;

  try {
    const data = await service.getCharacters({ page, limit, name });
    res.json(data);
  } catch (error) {
    res.status(502).json({ message: 'Error al consultar la API de Naruto', error: error.message });
  }
};

const getCharacterById = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await service.getCharacterById(id);

    if (!data) {
      return res.status(404).json({ message: 'Character not found' });
    }

    res.json(data);
  } catch (error) {
    res.status(502).json({ message: 'Error al consultar la API de Naruto', error: error.message });
  }
};

module.exports = {
  getCharacters,
  getCharacterById
};
