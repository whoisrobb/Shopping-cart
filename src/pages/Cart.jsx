import React from 'react'
import CartItem from '../components/CartItem'
import { useCart } from '../components/CartProvider'

const Cart = () => {
    const { cartItems } = useCart()

  return (
    <section className='cart' id='cart'>
        <div className="wrapper">
            <div className="shopping-cart">
                <h1>Shopping cart</h1>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} item={item} />
                })}
            </div>
            <div className="payment">

            </div>
        </div>
    </section>
  )
}

export default Cart