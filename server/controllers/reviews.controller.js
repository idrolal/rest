const { Rewiew } = require('../db/models');

async function initReviews(req, res) {
  try {
    const allReviews = await Rewiew.findAll();
    res.json(allReviews);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}


// dobavlenie novogo otziva;
async function addReview(req, res) {
  try {
    const newReview = await Rewiew.create(req.body);
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


async function putReviews(req, res) {
  const { info } = req.body;
  let newReviews;
  try {
    newReviews = await Rewiew.update({
      description: info,
      status: true,
    }, {
      where: {
        id: req.params.id,
      },
    });
    if (newReviews) {
      res.json(newReviews);
    }
  } catch (error) {
    return ({
      message: error.message,
    });
  }
}

module.exports = { initReviews, addReview, putReviews };

