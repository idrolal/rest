import React from 'react';
import { Link } from 'react-router-dom';
import { reactRouter } from '../../../utils/utils.js';

function AdminMenu(props) {
  return (
    <>
      {
        localStorage.getItem('token') &&
        <div>
          <div>
            <h3>Раздел бронирования</h3>
            <Link to={reactRouter.admin.allReservations}>Все бронирования</Link>
            <br />
          </div>
          <div>
            <h3>Раздел по работе с домами</h3>
            <Link to={reactRouter.admin.allHouses}>Все домики</Link>
            <br />
            <Link to={reactRouter.admin.addHouse}>Добавить дом</Link>
          </div>
          <div>
            <h3>Раздел по работе с отзывами</h3>
            <Link to={reactRouter.admin.confirmReviews}>Все отзывы</Link>
          </div>
        </div>
      }
    </>
  );
}

export default AdminMenu;
