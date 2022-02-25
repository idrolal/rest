import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


function AdminLogout(props) {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch({type: "LOGOUT"})
  },[dispatch])
  return (
    <div>
      
    </div>
  );
}

export default AdminLogout;
