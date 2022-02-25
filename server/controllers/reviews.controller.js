const { Rewiew } = require("../db/models");

async function initReviews(req, res) {
  try {
    const allReviews = await Rewiew.findAll();
    console.log(allReviews, "--------------------");
    res.json(allReviews);
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ message: error.message });
  }
}

module.exports = { initReviews };
