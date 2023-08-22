import React, { createContext, useContext, useEffect, useState } from 'react';

export const CartContext = createContext()

export const useCart = () => {
    return useContext(CartContext)
}

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem('cart')) || []
    )

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => quantity + item.quantity, 0
    )    

    const getItemQuantity = (itemId) => {
        return cartItems.find(item => item.id == itemId)?.quantity || 0
    }

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }])
    }

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
    }

    const increaseQuantity = (itemId) => {
        setCartItems((prevItems) => 
            prevItems.map((item) =>
                item.id == itemId ? { ...item, quantity: item.quantity + 1 } : item
        ))
    }

    const decreaseQuantity = (itemId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId
                ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
                : item
            ).filter((item) => item.quantity > 0) // Remove items with quantity 0
        )
    }

  return (
    <CartContext.Provider value={{ cartItems, cartQuantity, getItemQuantity, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider