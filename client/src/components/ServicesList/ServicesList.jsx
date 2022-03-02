import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ServicesCard from '../ServicesCard/ServicesCard'
function ServicesList(props) {

  const { services } = useSelector(state => state.servicesReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_SERVICES' })
  }, [dispatch])

  return (
    <>
      <h1>Страница услуг</h1>
      {services.length ? services.map(el => <ServicesCard key={el.id} services={el} />) : <div>НЕТ УСЛУГ</div>}
    </>
  );
}

export default ServicesList;
