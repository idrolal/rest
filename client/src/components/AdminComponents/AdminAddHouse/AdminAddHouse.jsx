import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { router } from '../../../utils/utils.js'
import { addHouseAdminAC } from '../../../redux/actionCreators/homesAC.js'
import { useNavigate } from 'react-router-dom';

function AdminAddHouse(props) {
  const navigate = useNavigate()

  // const [imgs, setImgs] = useState([])
  const [imgPaths, setImgPaths] = useState([])
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  console.log(state);

  const sendFiles = useCallback(async (e) => {
    const picturesData = [...e.target.files]
    console.log(picturesData);
    try {
      const url = `${process.env.REACT_APP_URL}${router.admin.addHouseServerIMGPath}`

      const data = new FormData();
      picturesData.forEach(img => {
        data.append('homesImg', img);
      });

      const headers = {
        Authorization: 'Bearer' + localStorage.getItem('token'),
      };

      const options = {
        method: 'PUT',
        body: data,
        headers,
      };

      fetch(url, options)
        .then(res => res.json())
        .then(imgPath => setImgPaths(imgPath))

    } catch (error) {
      console.log(error);
    }
  }, [])

  console.log(imgPaths.pathArr);

  const formAddHouse = useRef()

  // useEffect (() => {
  const createHouse = (e) => {
    e.preventDefault()
    const dataInput = Object.fromEntries(new FormData(formAddHouse.current))
    const data = { ...dataInput, img: imgPaths.pathArr }
    dispatch(addHouseAdminAC(data))
    navigate('/admin/houses/all')
  }
  // бесконечный фетч решить
  // })



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
          <select name='chips' style={{ display: 'block' }}>
            <option value='extenstions'>Дополнительные услуги при заезде: </option>
            <option value="С животными">С животными - бесплатно </option>
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

        <div className='images_box'>
          <div className='images_box__eachImg'>
            {
              imgPaths.pathArr?.length ?
                imgPaths.pathArr.map(img => {
                  return <div style={{ height: '100px', width: '200px', backgroundColor: 'grey' }} key={img}>
                    <img src={`${process.env.REACT_APP_URL}${router.admin.imgHousePath}${img}`} alt="..." style={{ height: '100px', width: '200px', }} />
                  </div>
                })
                :
                <div></div>
            }
            <input type="file" multiple onChange={sendFiles} />
          </div>

        </div>

        <button>Добавить дом</button>
      </form>
    </div>
  );
}

export default AdminAddHouse;
