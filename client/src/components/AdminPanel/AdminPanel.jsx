import React from 'react';
import { Link } from 'react-router-dom';
import { reactRouter } from '../../utils/utils.js';

function AdminPanel(props) {
  return (
    <div>
      <h1>Административный режим</h1>

      <div>
        <h3>Раздел бронирования</h3>
        <Link to={reactRouter.admin.allReservations}>Все бронирования</Link>
        <br />
        <Link to={reactRouter.admin.addReservation}>Создать новое бронирование</Link>
      </div>
      <div>
        <h3>Раздел по работе с домами</h3>
        <Link to={reactRouter.admin.allHouses}>Все номера</Link>
        <br />
        <Link to={reactRouter.admin.addHouse}>Добавить дом</Link>
      </div>
    </div>
  );
}

export default AdminPanel;
