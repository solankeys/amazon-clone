import { AiFillStar } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
import { useStateValue } from '../../StateProvider'
import './CartProducts.css'

const CartProducts = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue()

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }

  return (
    <div className='cart-products'>
      <div className='cart-products__img'>
        <img src={image} alt='product' />
      </div>
      <div className='cartProducts__info'>
        <p className='cartProducts__title'>{title}</p>
        <p className='cartproduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div classsName='cartproduct__rating'>
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
        <button onClick={removeFromBasket} className='remove-btn'>
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartProducts
