import React from 'react';
import {reactRouter} from '../../utils/utils';
import { Link } from 'react-router-dom';



export const HomesCard = ({homes}) => {

  return (
    <>
    <div>{homes?.description}</div>
    <div>{homes?.price}</div>
    <Link key={homes.id} to={`${reactRouter.user.booking}/${homes.id}`}>Click</Link>
    {/* <div>{homes?.chips[0].map(el=> <h3>{el}</h3>)}</div> */}
    </>
  );
};

