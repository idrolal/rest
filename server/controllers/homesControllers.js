const { House } = require('../db/models');

async function getAllHouses(req, res) {
  try {
    const allHomes = await House.findAll();
    console.log(allHomes, '--------------------')
    res.json( allHomes );
  } catch (error) {
    console.log(error.message);
    res.status(401).json({message: error.message});
  }
}

module.exports = { getAllHouses };
