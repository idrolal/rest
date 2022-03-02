const { Op } = require('sequelize');
const { Order, House, User } = require('../db/models');

function unique(arr, prop) {
  const seen = {};
  const result = arr.filter((item) => {
    if (seen[item[prop]]) {
      return false;
    }
    seen[item[prop]] = true;
    return true;
  });
  return result;
}

async function getHouse(req, res) {
  const { dataInUser, dataOutUser } = req.body;
  const avalibleHouses = [];
  const unavelebleHouses = [];
  const houses = await House.findAll();

  const occupieHouse = await Order.findAll({
    where: {
      [Op.or]: [
        {
          dataIn: { [Op.lte]: dataInUser },
          dataOut: { [Op.gte]: dataOutUser },
        },
        {
          dataIn: { [Op.gte]: dataInUser },
          dataOut: { [Op.lte]: dataOutUser },
        },
      ],
    },

    raw: true,
    include: [{
      model: House,
    }],
  });
  const filterOrder = unique(occupieHouse, 'house_id');
  unavelebleHouses.push(...filterOrder);

  houses.forEach((home) => {
    if (!unavelebleHouses.find((el) => el.house_id === home.id)) {
      avalibleHouses.push(home);
    }
  });
  res.json(avalibleHouses);
}

async function saveOrder(req, res) {
  const {
    currentHouse, info, interval, summa,
  } = req.body;
  try {
    const user = await User.findOne({
      where: { email: info.email },
    });

    if (user) {
      const order = await Order.findOne({
        where: {
          user_id: user.id,
          dataIn: interval.dataInUser,
          dataOut: interval.dataOutUser,
          house_id: currentHouse.id,
        },
      });

      if (order) {
        return res.status(400).json({ message: 'Дом забронирован' });
      }

      if (!order) {
        await Order.create({
          user_id: user.id,
          dataIn: interval.dataInUser,
          dataOut: interval.dataOutUser,
          comment: info.comment,
          summa,
          house_id: currentHouse.id,
        });
        return res.status(200).json({ message: 'Бронирование успешно создано!' });
      }
    }

    const newUser = await User.create({
      name: info.name,
      email: info.email,
      phone: info.phone,
    });

    await Order.create({
      user_id: newUser.id,
      dataIn: interval.dataInUser,
      dataOut: interval.dataOutUser,
      comment: info.comment,
      summa,
      house_id: currentHouse.id,
    });
    res.status(200).json({ message: 'Бронирование успешно создано!' });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
}

module.exports = { saveOrder, getHouse };
