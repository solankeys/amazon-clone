import { useNavigate } from 'react-router'
import React, { useState } from 'react'
import { auth } from '../../Firebase'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //login function
  const login = (e) => {
    e.preventDefault() // this stops the page from refresh on click

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in, redirect to homepage
        navigate('/')
      })
      .catch((e) => alert(e.message))
  }
  //register function
  const register = (e) => {
    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // created a user and logged in , redirect to homepage
        navigate('/')
      })
      .catch((e) => alert(e.message))
  }

  return (
    <div className='login'>
      <form>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='text'
          placeholder='Username'
        ></input>
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='password'
        ></input>
        <br />
        <button onClick={login}>Sign in</button>
        <br />
        <button onClick={register}>create ypur amazon account</button>
        <br />
      </form>
    </div>
  )
}

export default Login
