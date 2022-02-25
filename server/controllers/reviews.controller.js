const { Rewiew } = require("../db/models");

async function initReviews(req, res) {
  try {
    const allReviews = await Rewiew.findAll();
    // console.log(allReviews, "--------------------");
    res.json(allReviews);
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ message: error.message });
  }
}

async function putReviews(req, res) {
  // console.log(req.body)
  const { info } = req.body;
  // console.log(info)

  let newReviews;
  try {
    newReviews = await Rewiew.update({
      description: info,
      status: true
    }, {
      where: {
        id: req.params.id,
      },
    });
    if (newReviews) {
      res.json( newReviews );
    }
  } catch (error) {
    return ({
      message: error.message,
    });
  }
}

module.exports = { initReviews, putReviews };
