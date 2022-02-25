const serviceAdmin = require('../services/admin');
const { House } = require('../db/models');

async function saveImgController(req, res) {
  const { files } = req;
  console.log(files);
  const imgPathes = files.map((file) => file.originalname);
  res.json({ message: 'картинки успешно загружены', pathArr: imgPathes });
  // console.log(imgPathes);
}

async function addHouseController(req, res) {
  try {
    const {
      name, description, price, img,
    } = req.body;
    console.log(req.body);

    const newHouse = await House.create({
      name, description, price,
    });

    res.status(201).json({ isCreated: true, message: 'Новый дом успешно создался', newHouse });
  } catch (error) {
    console.log(error);
    res.json({ isCreated: false, message: `Произошла непредвиденная ошибка: ${error.message}` });
  }
}

async function adminLogin(req, res) {
  console.log(req.body);
  const { email, password, checked } = req.body;

  try {
    if (checked !== 'qwerty') {
      res.status(401).json({ message: 'Нет доступа входа' });
    }

    const admin = await serviceAdmin.login({ email, password });
    const token = await serviceAdmin.generateJwtToken(admin);
    console.log(token);
    res.status(200).json({
      token,
    });
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
}

module.exports = { saveImgController, addHouseController, adminLogin };
