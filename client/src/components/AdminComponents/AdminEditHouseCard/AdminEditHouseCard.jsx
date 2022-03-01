import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const AdminEditHouseCard = () => {

  const dispatch = useDispatch()

  const { id } = useParams();
  const { homes } = useSelector(state => state.homesReducer.homes)
  console.log(homes);
  const curHome = homes.find(home => home.id === +id)

  const nameRef = useRef()
  const descriptionRef = useRef()
  const priceRef = useRef()

  const handlerUpdate = (e) => {
    e.preventDefault()
    const updateHouse = {
      id: `${id}`,
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      price: priceRef.current.value,
    }
    dispatch({ type: "FETCH_PUT_HOMES", payload: updateHouse })
  }

  return (
    <form onSubmit={handlerUpdate}>
      <div>
        <input defaultValue={curHome.name} ref={nameRef} />
        <br />
        <input defaultValue={curHome.description} ref={descriptionRef} />
        <br />
        <input defaultValue={curHome.price} ref={priceRef} />
        <br />
      </div>
      <button>Update</button>
    </form>
  );
};

