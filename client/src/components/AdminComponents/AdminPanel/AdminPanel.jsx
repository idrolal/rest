import React from 'react';
import AdminMenu from '../AdminMenu/AdminMenu';
import './AdminPanel.css';

function AdminPanel(props) {
  return (
    <>
      {
        localStorage.getItem('token') &&
        <div className='app-container'>
          <h1 className='title-text'>Административный режим</h1>
          <AdminMenu />
        </div>
      }
    </>
  );
}

export default AdminPanel;
