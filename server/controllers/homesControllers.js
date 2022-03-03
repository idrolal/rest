const { House, ImageHouse } = require('../db/models');

async function getAllHouses(req, res) {
  try {
    const allHomes = await House.findAll({
      include: [
        {
          model: ImageHouse,
        },
      ],
    });
    res.json(allHomes);
  } catch (error) {
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

async function getOneHome(req, res) {
  const { id } = req.params;
  console.log(id, ',<++++++');
  try {
    const house = await House.findOne({
      where: { id },
      raw: true,
      include: [
        {
          model: ImageHouse,
        },
      ],
    });
    res.json(house);
    console.log(house);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}

module.exports = { getAllHouses, deleteHomes, getOneHome };
