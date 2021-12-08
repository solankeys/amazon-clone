import React from 'react'
import './Cart.css'
import CartProducts from '../../Component/CartProducts/CartProducts'
import Navbar from '../../Component/NavBar/Navbar'
import Subtotal from '../../Component/Subtotal/Subtotal'
import { useStateValue } from '../../StateProvider'

const Cart = () => {
  const [{ basket }, disptach] = useStateValue()

  return (
    <div className='cart-page'>
      <Navbar />
      <div className='cart'>
        <div className='cart-left'>
          {basket?.length === 0 ? (
            <div className='cart-nothing'>
              <h3>You have added nothing to your cart. please Add something</h3>
            </div>
          ) : (
            <div className='cart-items'>
              <h2>Your shopping basket</h2>
              {basket.map((item) => (
                <CartProducts
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        <div className='cart-right'>
          {basket.length > 0 && (
            <div className='cartright'>
              <Subtotal />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Cart
