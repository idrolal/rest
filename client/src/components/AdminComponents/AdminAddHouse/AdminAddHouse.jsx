import React, { useRef, useState, useCallback } from 'react';
import { reactRouter } from '../../../utils/utils.js'

function AdminAddHouse(props) {

  const [img, setImg] = useState()
  let newEventPhoto;
  const setImgHandler = async () => { newEventPhoto = await sendImageToServer() }

  const sendImageToServer = useCallback(async () => {
    const sendImageToServerURL = `${process.env.REACT_APP_URL}${reactRouter.admin.addHouseServerPath}`
    const data = new FormData()
    data.append('homes', img)
    const options = {
      method: 'POST',
      body: data,
    }
    fetch(sendImageToServerURL, options)
      .then(res => res.json())
      .then(imgPath => setImg(imgPath))
  }, [img])

  const formAddHouse = useRef()

  const createHouse = async (e) => {
    e.preventDefault()
    setImgHandler()

    const dataInput = Object.fromEntries(new FormData(formAddHouse.current))
    const seedPhoto = newEventPhoto || null
    const data = { ...dataInput, img: seedPhoto }
    console.log(data);
    // тут будет вызываться диспатч
  }


  return (
    <div>
      <h1>Admin Add House</h1>

      <form ref={formAddHouse} onSubmit={createHouse}>
        <div>
          <label htmlFor="houseName">Название дома: </label>
          <input type="text" id='houseName' name='name' />
        </div>

        <div>
          <label htmlFor="houseDescription">Описание дома: </label>
          <textarea type="text" id='houseDescription' name='description' />
        </div>

        <div>
          {/* нормальный селект опшион */}
          <select name='chips'>
            <option disabled selected>Дополнительные услуги при заезде: </option>
            <option value="С животными">С животными 1000 &#8381; </option>
            <option value="Детская кроватка">Детская кроватка - бесплатно</option>
            <option value="Трансфер">Трансфер - 5000 &#8381;</option>
          </select>
        </div>

        <div>
          <label htmlFor="housePrice">Цена: </label>
          <input type="text" id='housePrice' name='price' onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }} />&#8381;
        </div>

        <div>
          {/* <img src="..." alt="..." /> */}
          <input type="file" onChange={e => setImg(e.target.files[0])} />
        </div>

        <button>Добавить дом</button>
      </form>
    </div>
  );
}

export default AdminAddHouse;
