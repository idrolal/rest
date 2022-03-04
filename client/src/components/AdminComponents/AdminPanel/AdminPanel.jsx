import React from 'react';
import AdminMenu from '../AdminMenu/AdminMenu';

function AdminPanel(props) {
  return (
    <>
      
        <div className='app-container'>
          <h1>Административный режим</h1>
          <AdminMenu />
        </div>
    </>
  );
}

export default AdminPanel;
