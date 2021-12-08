import React from 'react'
import Navbar from '../../Component/NavBar/Navbar'
import Product_Category from '../../Component/ProductCategory/Product_category'
import './Home.css'
import electronic from '../../Images/electronics.JPG'
import TV from '../../Images/TV.JPG'
import cybermonday from '../../Images/cybermonday.JPG'
import easyreturns from '../../Images/easy-returns.JPG'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='home_imageContainer'>
        <img
          className='home__image'
          src='https://m.media-amazon.com/images/I/610aFo74RdL._SX3000_.jpg'
          alt='banner'
        ></img>
      </div>

      <div className='home-top-section'>
        <Product_Category
          title='Electonics'
          image={electronic}
          link='See more'
        />
        <Product_Category
          title='Find your ideal TV'
          image={TV}
          link='See more'
        />

        <Product_Category
          title='Holiday gifts'
          image={electronic}
          link='Shop all gift guides'
        />
        <Product_Category
          title='Find your ideal TV'
          image={electronic}
          link='See more'
        />
      </div>
      <div className='home-middle-section'>
        <Product_Category
          title='Cyber Monday'
          image={cybermonday}
          link='Shop Now'
        />
        <Product_Category
          title='Find your ideal TV'
          image={electronic}
          link='See more'
        />
        <Product_Category
          title='Easy Returns'
          image={easyreturns}
          link='Learn More'
        />
        <Product_Category
          title='Holiday gifts'
          image={electronic}
          link='Shop all gift guides'
        />
      </div>
    </div>
  )
}

export default Home
