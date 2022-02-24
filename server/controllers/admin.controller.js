async function saveImgController(req, res) {
  const { files } = req;
  console.log(files);

  // const eventImagePath = `http://localhost:${process.env.PORT}/${req.file.path}`;
  // res.json(eventImagePath);
  res.send('hello');
}

async function addHouseController(req, res) {
  res.send('hello');
}

module.exports = { saveImgController, addHouseController };
