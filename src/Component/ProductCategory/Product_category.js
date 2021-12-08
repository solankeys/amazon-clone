import React from 'react'
import './Product_Category.css'
import { AiFillStar } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
import { Link } from 'react-router-dom'

const Product_Category = ({ title, image, link }) => {
  return (
    <div className='product-category'>
      <h2>{title}</h2>
      <div className='product-category__image-container'>
        <Link to='/electronics  '>
          <img src={image} alt='electronics' />
        </Link>
      </div>
      <Link to='/electronics' className='product-category__link'>
        {link}{' '}
      </Link>
    </div>
  )
}

export default Product_Category
