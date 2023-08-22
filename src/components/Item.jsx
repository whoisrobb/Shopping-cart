import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
  return (
    <div className='item'>
        <div className="cover">
            <Link to={`/explore/${item.id}`}>
                <img src={item.imageUrl} alt="" />
            </Link>
        </div>
        <div className="bottom">
            <div className="details">
                <p className="name">{item.name}</p>
                <p className="price">${item.price}</p>
            </div>
            <i className="uil uil-heart"></i>
        </div>
    </div>
  )
}

export default Item