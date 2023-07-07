import { useId } from "react"
import { CartIcon, ClearCartIcon } from "./Icons"
import "./Cart.css"
import { useCart } from "../hooks/useCart"

const CartItem = ({ thumbnail, title, price, quantity, onAdd }) => {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>Cantidad: {quantity}</small>
        <button onClick={onAdd}>+</button>
      </footer>
    </li>
  )
}
export const Cart = () => {
  const cartCheckboxId = useId()
  const { cart, clearCart, addCart } = useCart()

  return (
    <div>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />

      <aside className="cart">
        <ul>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} onAdd={() => addCart(item)}/>
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </div>
  )
}
