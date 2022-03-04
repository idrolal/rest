import React from 'react';
import { useSelector } from 'react-redux';
import NotFound from '../../NotFound/NotFound';
import AdminMenu from '../AdminMenu/AdminMenu';

function AdminPanel(props) {
  const { admin } = useSelector(state => state.adminReducer);

  return (
    <>
      {admin?.email ? <div className='app-container'>
        <h1>Административный режим</h1>
        <AdminMenu />
      </div> : <NotFound />}

    </>
  );
}

export default AdminPanel;
