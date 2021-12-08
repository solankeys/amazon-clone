import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../../reducer'
import { useStateValue } from '../../StateProvider'
import './Subtotal.css'

const Subtotal = () => {
  const [{ basket }, disptach] = useStateValue()
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            {/* <small className='subtotal__gift'>
              <input type='checkbox' /> this order contains gifts
            </small> */}
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button className='checkout-btn'>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal
