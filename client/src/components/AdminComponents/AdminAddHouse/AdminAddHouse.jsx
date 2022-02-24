import React, { useRef } from 'react';

function AdminAddHouse(props) {


  return (
    <div>
      <h1>Admin Add House</h1>

      <form>
        <div>
          <label htmlFor="houseName">Название дома: </label>
          <input type="text" id='houseName' name='name' />
        </div>

        <div>
          <label htmlFor="">Описание дома: </label>
          <textarea type="text" id='houseDescription' name='description' />
        </div>

        <div>
          <select >
            <option value=""></option>
          </select>
        </div>

        <div>
          <label htmlFor="housePrice">Цена: </label>
          <input type="text" id='housePrice' name='price' />&#8381;
        </div>

        <div>
          <img src="..." alt="..." />
          <input type="file" />
        </div>

        <button>Добавить дом</button>
      </form>
    </div>
  );
}

export default AdminAddHouse;
