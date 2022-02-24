import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function AdminLogin(props) {

  const loginRef = useRef()

  const dataForm = new FormData(loginRef.current)
  const dispatch = useDispatch()

  const login = (event) => {
    event.preventDefault()
    const user = {
      email: dataForm.get("email"),
      password: dataForm.get('password'),
      checked: dataForm.get('checked'),
    }
    console.log(user)
    // dispatch("FETCH_POST_LOGIN")
  }

  return (
    <div >

      <form ref={loginRef} onSubmit={login}>
        <div>
          <label htmlFor="email"></label>
          <input type="text" id='email' name='email' placeholder='Email' autoComplete='false' />
        </div>

        <div>
          <label htmlFor="password"></label>
          <input type="password" id='password' name='password' placeholder='Password' />
        </div>

        <div>
          <label htmlFor="checked"></label>
          <input type="password" id='checked' name='checked' autoComplete='false' />
        </div>

        <button>Войти</button>
      </form>
    </div>
  );
}

export default AdminLogin;
