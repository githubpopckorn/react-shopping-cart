import { createContext, useReducer, useState } from "react"
import { cartInitalState, cartReducer } from "../reducer/CartReducer"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [setCart] = useState([])
  const [state, dispatch] = useReducer(cartReducer, cartInitalState)

  const addCart = product => dispatch({ type: "ADD_TO_CART", payload: product })
  const removeFromCart = product => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addCart,
        removeFromCart,
        setCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
