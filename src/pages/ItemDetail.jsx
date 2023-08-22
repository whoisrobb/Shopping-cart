import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../utils/data'
import { useCart } from '../components/CartProvider'

const ItemDetail = () => {
    const { id } = useParams()
    const { getItemQuantity, increaseQuantity, decreaseQuantity } = useCart()

    const { addToCart } = useCart()

    const findData = (id) => {
        let foundItem = null;
        
        const parsedId = parseInt(id, 10)
        // Search in "lamps"
        foundItem = data.lamps.find((item) => item.id === parsedId);
      
        // If not found in "lamps," search in "furniture"
        if (!foundItem) {
          foundItem = data.furniture.find((item) => item.id === parsedId);
        }
      
        return foundItem;
     }

     const itemData = findData(id)
     const quantity = getItemQuantity(Number(itemData.id))

  return (
    <section className='item-detail'>
        <div className="cover">
            <img src={`/public/${itemData.imageUrl}`} alt="" />
                {/* <img src="/public/office-chair-1.png" alt="" /> */}
        </div>
        <div className="details">
            <h1 className="name">{itemData.name}</h1>
            <p className="description">{itemData.description}</p>
            <div className="options">
                <span className="circ-1"></span>
                <span className="circ-2"></span>
            </div>
            <h4 className="price">${itemData.price}</h4>
            {quantity == 0 ?
                <button className='add-to-cart' onClick={() => addToCart(itemData)}>add to cart</button>
                : 
                <div className="actions">
                    <button className="minus" onClick={() => decreaseQuantity(itemData.id)}><i className="uil uil-minus"></i></button>
                    <div className="quantity">{quantity}</div>
                    <button className="plus" onClick={() => increaseQuantity(itemData.id)}><i className="uil uil-plus"></i></button>
                </div>
            }
        </div>
    </section>
  )
}

export default ItemDetail