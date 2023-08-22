import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from './CartProvider'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { cartQuantity } = useCart()

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const navStyle = {
        transform: isOpen ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'transform 0.3s ease-in-out',
      };
      

  return (
    <div className='header'>
        <div className="logo">
            <Link to={'/'} onClick={() => setIsOpen(false)}>hommie.</Link>
        </div>
        <nav style={navStyle}>
            <ul>
                <li><Link to={'/explore'} onClick={handleClick}>explore</Link></li>
                <li><Link to={'/about'} onClick={handleClick}>about</Link></li>
                <li><Link to={'/contact'} onClick={handleClick}>contact</Link></li>
            </ul>
        </nav>
        <div className="icons">
            <ul>
                {/* <li><Link to={''}><i className="uil uil-user"></i></Link></li> */}
                <li className='shopping-cart'><Link to={'/cart'}><i className="uil uil-shopping-cart">{cartQuantity > 0 ? <span>{JSON.stringify(cartQuantity)}</span> : ''} </i></Link></li>
                <li><button onClick={handleClick}>
                    {isOpen ? <i className="uil uil-times"></i> : <i className="uil uil-bars"></i>}
                
                </button></li>
            </ul>
        </div>
    </div>
  )
}

export default Header