async function saveImgController(req, res) {
  // const eventImagePath = `http://localhost:${process.env.PORT}/${req.file.path}`;
  // res.json(eventImagePath);
  res.json();
}

async function addHouseController(req, res) {
  res.send('hello');
}

module.exports = { saveImgController, addHouseController };
