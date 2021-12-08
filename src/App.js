import './App.css'
import { Routes, Route, Router } from 'react-router'
import Home from './Pages/HomePage/Home'
import { BrowserRouter } from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import Login from './Pages/Login/Login'
import { useStateValue } from './StateProvider'
import { useEffect } from 'react'
import { auth } from './Firebase'
import Electronics from './Pages/Electronics/Electronics'

function App() {
  const [{ user }, dispatch] = useStateValue()

  //useEffect
  // piece of code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in..
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })

    return () => {
      //Any cleanup operations go in here...
      unsubscribe()
    }
  }, [])

  console.log('USER IS >>>>', user)
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/electronics' element={<Electronics />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
