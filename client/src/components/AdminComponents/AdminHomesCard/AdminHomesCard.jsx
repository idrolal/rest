import React  from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { reactRouter } from '../../../utils/utils.js';
import { router } from '../../../utils/utils.js';
import './AdminHomesCard.css';


function AdminHomesCard({ home }) {
  const dispatch = useDispatch();


  function deleteHome(id) {
    dispatch({ type: "FETCH_DELETE_HOME", payload: `${id}` });
    dispatch({ type: 'FETCH_GET_HOMES' })
  }

  return (
    <>
      {
        localStorage.getItem('token') &&
        <div className='house_card'>
          <div>
            <h4>{home?.name}</h4>
            <div>{home?.description}</div>
            <div>{home?.price}</div>
            <div className='container-btns-housecard'>
              <div className='house_card__btn-box'>
                <button className='house_card__btns_style' id='delete-btn-adminhousecard' onClick={() => deleteHome(home.id)}>Удалить домик</button>
              </div>
              <div className='house_card__btn-box' >
                <Link to={`${reactRouter.admin.editHouse}${home.id}`} key={home?.id} className='house_card__btns_style'>Изменить дом</Link>
              </div>
            </div>
          </div>


          <div className='house_card__imgs-box'>
            {
              home.ImageHouses
                ?
                home.ImageHouses.map(img =>
                  <img
                    src={`${process.env.REACT_APP_URL}${router.admin.imgHousePath}${img.name}`}
                    alt={img.name}
                    key={img.name}
                    className='house_card__imgs'
                    style={{ height: '100px', width: '100px' }}
                  />
                )
                :
                <div>None</div>
            }
          </div>
        </div>
      }
    </>
  );
}

export default AdminHomesCard;
