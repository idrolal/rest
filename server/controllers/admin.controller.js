const serviceAdmin = require('../services/admin');
const { House } = require('../db/models');
const { Word } = require('../db/models');
const { ImageHouse } = require('../db/models');
const { Order } = require('../db/models');

async function saveImgController(req, res) {
  const { files } = req;
  console.log(files);
  const imgPathes = files.map((file) => file.filename);
  res.json({ message: 'картинки успешно загружены', pathArr: imgPathes });
  // console.log(imgPathes);
}

async function addHouseController(req, res) {
  const {
    name, description, price, img,
  } = req.body;
  try {
    const newHouse = await House.create({
      name, description, price,
    });

    const imgHouse = [];
    const saveImgs = img.forEach(async (pic) => {
      const eachPic = await ImageHouse.create({
        name: pic,
        house_id: newHouse.id,
      });
      return imgHouse.push(eachPic.name);
    });

    const houseInfo = { ...newHouse, img: imgHouse };
    return res.status(201).json({ isCreated: true, message: 'Новый дом успешно создался', houseInfo });
  } catch (error) {
    return res.json({ isCreated: false, message: `Произошла непредвиденная ошибка: ${error.message}` });
  }
}

async function adminLogin(req, res) {
  const { email, password, checked } = req.body;

  const checkedWordinDB = await Word.findOne({
    raw: true,
  });
  try {
    if (checked !== checkedWordinDB.name) {
      res.status(401).json({ message: 'Нет доступа входа' });
    }

    const admin = await serviceAdmin.login({ email, password });
    const token = await serviceAdmin.generateJwtToken(admin);
    res.status(200).json({
      token, admin: { email: admin.email, name: admin.name },
    });
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
}

async function editHouseController(req, res) {
  const { name, description, price } = req.body;
  // console.log(name, description)
  let newHouses;
  try {
    newHouses = await House.update({
      name,
      description,
      price,
    }, {
      where: {
        id: req.params.id,
      },
    });
    if (newHouses) {
      return res.json({ message: 'успешное обновление дома', newHouses });
    }
    return res.json({ message: 'что-то пошло не так' });
  } catch (error) {
    return ({
      message: error.message,
    });
  }
}

async function getAllReservations(req, res) {
  const allReservations = await Order.findAll();
  res.json({ reservations: allReservations });
}

module.exports = {
  saveImgController, addHouseController, adminLogin, editHouseController, getAllReservations,
};
