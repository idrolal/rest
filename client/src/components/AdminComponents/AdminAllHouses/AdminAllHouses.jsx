import React from 'react';
import { useSelector } from 'react-redux'


function AdminAllHouses(props) {
  const state = useSelector(state => state)
  return (
    <div>
      <h1>Admin All Houses</h1>
    </div>
  );
}

export default AdminAllHouses;
