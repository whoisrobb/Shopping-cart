import React from 'react'
import { Link } from 'react-router-dom'
import Item from '../components/Item'
import data from '../utils/data'
import { useCart } from '../components/CartProvider'

const Explore = () => {
    const { getItemQuantity, addToCart, increaseQuantity, decreaseQuantity } = useCart()

    const saleData = {
            id: 8,
            name: "Executive Office Desk",
            description: "Elevate your workspace with our sleek and functional office desk. Designed for productivity, it features ample storage, ergonomic design, and contemporary aesthetics. Redefine your work environment today.",
            price: 399.99,
            imageUrl: "desk-0.png"
        }

        const quantity = getItemQuantity(Number(saleData.id))

  return (
    <section className='explore' id='explore'>
        <div className="other">
            {data.furniture.map((item, index) => {
                return <Item key={index} item={item} />
            })}
        </div>
        <div className="sale">
            <div className="img">
                <img src="desk-0.png" alt="" />
            </div>
            <div className="details">
                <h3>Executive Office Desk</h3>
                <p>Elevate your workspace with our sleek and functional office desk. Designed for productivity, it features ample storage, ergonomic design, and contemporary aesthetics. Redefine your work environment today.</p>
                <div className="rating">
                    <i className="uil uil-star"></i>
                    <i className="uil uil-star"></i>
                    <i className="uil uil-star"></i>
                    <i className="uil uil-star"></i>
                    <i className="uil uil-star"></i>
                </div>
                <div>
                    <h4 className="price">${saleData.price}</h4>
                    {quantity == 0 ?
                        <button className='add-to-cart' onClick={() => addToCart(saleData)}>add to cart</button>
                        : 
                        <div className="actions">
                            <button className="minus" onClick={() => decreaseQuantity(saleData.id)}><i className="uil uil-minus"></i></button>
                            <div className="quantity">{quantity}</div>
                            <button className="plus" onClick={() => increaseQuantity(saleData.id)}><i className="uil uil-plus"></i></button>
                        </div>
                    }
                </div>
            </div>
        </div>
        <div className="other">
            {data.lamps.map((item, index) => {
                return <Item key={index} item={item} />
            })}
        </div>
    </section>
  )
}

export default Explore