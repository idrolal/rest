const { Order, House, User } = require('../db/models');

function foo(max, min) {
  const maxDay = Date.parse(max);
  const minDay = Date.parse(min);
  const interval = [];
  for (let i = minDay; i <= maxDay; i += 60 * 60 * 24 * 1000) {
    interval.push(new Date(i).toISOString().substring(0, 10));
  }
  return interval;
}

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

async function getFreeHouse(req, res) {
  const { dataInUser, dataOutUser } = req.body;
  const house = await House.findAll();

  try {
    const order = await Order.findAll();
    const allFreeHouse = await Promise.all(order.map((el) => {
      const interval = foo(el.dataOut, el.dataIn);
      const freeHouse = [];
      if (!interval.includes(dataInUser) && !interval.includes(dataOutUser) || interval[interval.length - 1] === dataInUser) {
        if (Date.parse(interval[0]) < Date.parse(dataOutUser)) {
          freeHouse.push(House.findAll({
            where: { id: el.house_id },
          }));
        }
      }
      if (interval[0] === dataOutUser) {
        freeHouse.push(House.findAll({
          where: { id: el.house_id },
        }));
      }

      return Promise.all(freeHouse);
    }));

    console.log(allFreeHouse);

    if (allFreeHouse[0].length < 1) {
      res.json({ message: 'Свободных домиков нет:(' });
    } else {
      const arrOfFreeHouse = allFreeHouse.map((el) => el[0][0]);
      const uniqueArrOfFreeHouse = unique(arrOfFreeHouse, 'id');
      const otherHouse = uniqueArrOfFreeHouse.map((ar) => {
        const all = [];
        house.map((home) => {
          if (home.id !== ar.house_id) {
            all.push(home, ar);
            return all;
          }
        });
        return all;
      });

      const freeHouseAndOrder = otherHouse.map((el) => unique(el, 'id'));

      if (uniqueArrOfFreeHouse.length) {
        res.json(freeHouseAndOrder);
      } else {
        res.json(house);
      }
    }
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
}

async function saveOrder(req, res) {
  const {
    currentHouse, info, interval, summa,
  } = req.body;
  try {
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
  } catch (e) {
    console.log(e.message)
  }
}

module.exports = { getFreeHouse, saveOrder };
