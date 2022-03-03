import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ServicesList.css'
import ServicesHome from '../Home/ServicesHome/ServicesHome';

function ServicesList(props) {

  const { services } = useSelector(state => state.servicesReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_SERVICES' })
  }, [dispatch])

  return (
    <>
      {services.length ? <ServicesHome services={services}/> : <h1>No services</h1>}
    </>
  );
}

export default ServicesList;
