// api-dattebayo.vercel.app es el sitio de documentación (SPA);
// la API real que consume esos datos vive en este host:
const BASE_URL = 'https://dattebayo-api.onrender.com';

// GET /characters?page=&limit=&name=
const getCharacters = async ({ page, limit, name } = {}) => {
  const params = new URLSearchParams();
  if (page) params.append('page', page);
  if (limit) params.append('limit', limit);
  if (name) params.append('name', name);

  const query = params.toString() ? `?${params.toString()}` : '';
  const response = await fetch(`${BASE_URL}/characters${query}`);

  if (!response.ok) {
    throw new Error(`Dattebayo API respondió con estado ${response.status}`);
  }

  return response.json();
};

// GET /characters/:id
const getCharacterById = async (id) => {
  const response = await fetch(`${BASE_URL}/characters/${id}`);

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Dattebayo API respondió con estado ${response.status}`);
  }

  return response.json();
};

module.exports = {
  getCharacters,
  getCharacterById
};
