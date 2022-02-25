import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function AdminLogin(props) {

  const emailRef = useRef();
  const passRef = useRef();
  const checkedRef = useRef()

  const dispatch = useDispatch()

  const login = (event) => {
    event.preventDefault()
    const user = {
      email: emailRef.current.value,
      password: passRef.current.value,
      checked: checkedRef.current.value,
    }
    console.log(user)
    dispatch({ type: "FETCH_POST_LOGIN", payload: user })
  }

  return (
    <div >

      <form onSubmit={login}>
        <div>
          <label htmlFor="email"></label>
          <input ref={emailRef} type="text" id='email' name='email' placeholder='Email' autoComplete='false' />
        </div>

        <div>
          <label htmlFor="password"></label>
          <input ref={passRef} type="password" id='password' name='password' placeholder='Password' />
        </div>

        <div>
          <label htmlFor="checked"></label>
          <input ref={checkedRef} type="password" id='checked' name='checked' autoComplete='false' />
        </div>

        <button>Войти</button>
      </form>
    </div>
  );
}

export default AdminLogin;
