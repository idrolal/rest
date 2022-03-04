import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reactRouter } from '../../../utils/utils';
import NotFound from '../../NotFound/NotFound';
import './AdminLogin.css';

function AdminLogin(props) {

  const emailRef = useRef();
  const passRef = useRef();
  const checkedRef = useRef();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { admin } = useSelector(state => state.adminReducer)
  const login = (event) => {
    event.preventDefault()
    const user = {
      email: emailRef.current.value,
      password: passRef.current.value,
      checked: checkedRef.current.value,
    }
    dispatch({ type: "FETCH_POST_LOGIN", payload: user })
    navigate(reactRouter.admin.main)

  }

  return (

    <div className='app-container'>
      {!localStorage.getItem('token') ?
        <div className='adminlogin-container'>
          <form onSubmit={login}>
            <div>
              <label htmlFor="email"></label>
              <input ref={emailRef} type="text" id='email' name='email' placeholder='Email' autoComplete='off' />
            </div>

            <div>
              <label htmlFor="password"></label>
              <input ref={passRef} type="password" id='password' name='password' placeholder='Пароль' />
            </div>

            <div>
              <label htmlFor="checked"></label>
              <input ref={checkedRef} type="password" id='checked' name='checked' placeholder='Секрет' autoComplete='false' />
            </div>

            <button className="adminlogin-btn">Войти</button>
          </form>
        </div>
        : <NotFound />}
    </div>
  );
}

export default AdminLogin;
