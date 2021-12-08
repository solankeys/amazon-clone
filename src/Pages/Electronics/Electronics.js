import React from 'react'
import Products from '../../Component/Products/Products'
import './Electronics.css'
import Navbar from '../../Component/NavBar/Navbar'
import { Link } from 'react-router-dom'
import { AiOutlineLeft } from 'react-icons/ai'
import oculus from '../../Images/oculus.JPG'
import pen from '../../Images/apple-pen.JPG'
import batteries from '../../Images/batteries.JPG'
import playstation from '../../Images/playstation.JPG'

const Electronics = () => {
  return (
    <div className='electronics-page'>
      <Navbar />
      <div className='electronics'>
        <div className='electronics-left'>
          <ul>
            <h4>Departments</h4>
            <Link to='/'>
              <li>
                {' '}
                <AiOutlineLeft />
                Accessories & Supplies
              </li>
            </Link>
            <Link to='/'>
              <li>
                {' '}
                <AiOutlineLeft />
                Camera & Photo
              </li>
            </Link>
            <Link to='/'>
              <li>
                {' '}
                <AiOutlineLeft /> Car & Vehivle Electronics
              </li>
            </Link>
            <Link to='/'>
              <li>
                {' '}
                <AiOutlineLeft />
                Cell Phones & Accessories
              </li>
            </Link>
            <Link to='/'>
              <li>
                {' '}
                <AiOutlineLeft />
                Computers & Accessories
              </li>
            </Link>
            <Link to='/'>
              <li>
                {' '}
                <AiOutlineLeft />
                Electronics Warranties
              </li>
            </Link>
            <Link to='/'>
              <li>
                {' '}
                <AiOutlineLeft />
                GPS, Finders & Accessories{' '}
              </li>
            </Link>
            <Link to='/'>
              <li>
                <AiOutlineLeft /> Headphones
              </li>
            </Link>
          </ul>
        </div>
        <div className='electronics-right'>
          <h2>Electronics </h2>
          <p>
            Shop home entertainment, TVs, home audio, headphones, cameras,
            accessories and more
          </p>
          <div className='electronics-right-bottom'>
            <Products
              id='1'
              title='Oculus Quest 2 - Advanced All-In-One Virtual
              Reality Headset - 128GB '
              price={11.96}
              rating={5}
              image={oculus}
            />
            <Products
              id='1'
              title='Apple Pencil ( 2nd Generation)'
              price={11.96}
              rating={5}
              image={pen}
            />
            <Products
              id='1'
              title='Amazon Basics 48 packs AA High-Performance
              Alkaline Batteries, 10-Year Shelf Life, Easy to Open vlaue Pack'
              price={11.96}
              rating={5}
              image={batteries}
            />
            <Products
              id='1'
              title='Oculus Quest 2 - Advanced All-In-One Virtual
              Reality Headset - 128GB'
              price={11.96}
              rating={5}
              image={oculus}
            />
            <Products
              id='1'
              title='Roku Streaming Stick 4K 2021 | Streaming Device 4k/HDR/Dolby Vision with Roku Voice Remote and TV Controls'
              price={11.96}
              rating={5}
              image={playstation}
            />
            <Products
              id='1'
              title='Amazon Basics 48 packs AA High-Performance
              Alkaline Batteries, 10-Year Shelf Life, Easy to Open vlaue Pack'
              price={11.96}
              rating={5}
              image={batteries}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Electronics
