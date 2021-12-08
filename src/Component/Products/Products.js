import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
import { useStateValue } from '../../StateProvider'
import './Products.css'

const Products = ({ title, price, rating, id, image }) => {
  const [{ basket }, disptach] = useStateValue()

  const addToBasket = () => {
    // Add item to basket...
    disptach({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }

  return (
    <div className='products'>
      <div className='prod-image-container'>
        <img src={image} alt='products' />
      </div>
      <div>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product-stars'>
          <div classsName='product__rating'>
            {Array(rating)
              .fill()
              .map((_) => (
                <IconContext.Provider value={{ color: '#cd9042' }}>
                  <p className='stars'>
                    <AiFillStar />
                  </p>
                </IconContext.Provider>
              ))}
          </div>
        </div>
        <button onClick={addToBasket} className='add-btn'>
          Add To cart
        </button>
      </div>
    </div>
  )
}

export default Products
