import React from 'react'
import { useCart } from './CartProvider'

const CartItem = ({ item }) => {
    const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart()

  return (
    <div className='cart-item'>
        <div className="img">
            <img src={item.imageUrl} alt="" />
        </div>
        <div className="details">
            <p className="name">{item.name}</p>
            <p className="price">{item.price}</p>
        </div>
        <div className="actions">
            <button className="minus" onClick={() => decreaseQuantity(item.id)}><i className="uil uil-minus"></i></button>
            <div className="quantity">{item.quantity}</div>
            <button className="plus" onClick={() => increaseQuantity(item.id)}><i className="uil uil-plus"></i></button>
        </div>
        <div className="total">
            ${(item.quantity * Number(item.price)).toFixed(2)}
        </div>
        <button className='delete' onClick={() => removeFromCart(item.id)}>
            <i className="uil uil-times"></i>
        </button>
    </div>
  )
}

export default CartItem