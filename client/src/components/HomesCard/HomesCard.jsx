import React from 'react';



export const HomesCard = ({homes}) => {

  return (
    <>
    <div>{homes?.description}</div>
    <div>{homes?.price}</div>
    <div>{homes?.chips[0].map(el=> <h3>{el}</h3>)}</div>
    </>
  );
};

