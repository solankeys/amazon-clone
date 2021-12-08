import React from 'react'
import './NavBar.css'
import logo from '../../Images/amazon-logo.JPG'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useStateValue } from '../../StateProvider'
import { auth } from '../../Firebase'

const Navbar = () => {
  const [{ basket, user }] = useStateValue()
  console.log(basket)

  const login = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <nav className='header'>
      {/* <div className=' image-container'> */}
      <Link to='/' className='header-image-container'>
        <img className='image' src={logo} alt='amazon logo' />
      </Link>
      {/* </div> */}
      <div className='header__search'>
        <select className='header-options' placeholder='All'>
          <option>All</option>
          <option>Art and Crafts</option>
          <option>Automotive</option>
          <option>Baby</option>
          <option>Beauty and Personal care</option>
          <option>Books</option>
        </select>
        <input type='search' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'>
        <Link to={!user && '/login'}>
          <div onClick={login} className='header__link'>
            <span className='header__optionLineOne'>Hello {user?.email}</span>
            <span className='header__optionLineTwo'>
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
        <Link to='/' className='header-return'>
          <div className='header__link'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'> & Orders</span>
          </div>
        </Link>
        <Link to='/' className='header-prime'>
          <div className='header__link'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </Link>
        <Link to='/cart'>
          <div className='header__optionBasket'>
            <ShoppingCartIcon />
            <span className='header__optionLineTwo'>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
