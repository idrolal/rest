const { House } = require('../db/models');
const { ImageHouse } = require('../db/models');

async function getAllHouses(req, res) {
  try {
    const allHomes = await House.findAll();

    res.json(allHomes);
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ message: error.message });
  }
}

function deleteHomes(req, res) {
  const { id } = req.params;
  ImageHouse.destroy({ where: { house_id: id } });

  House.destroy({ where: { id } })
    .then((data) => (data ? res.json(id) : res.status(404).json(data)))
    .catch((error) => res.status(500).json(error));
}

module.exports = { getAllHouses, deleteHomes };
