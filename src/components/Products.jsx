import "./Products.css"
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"
import { useCart } from "../hooks/useCart"

export const Products = ({ products }) => {
  const { addCart, removeFromCart, cart } = useCart()

  const checkProductoInCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }

  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          const isProductInCart = checkProductoInCart(product)

          return (
            <li key={product.id}>
              <article>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>{product.name}</strong>
                </div>
                <p>${product.price}</p>
                <div>
                  {isProductInCart ? (
                    <button style={{backgroundColor: 'red'}}onClick={() => removeFromCart(product)}>
                      <RemoveFromCartIcon />
                    </button>
                  ) : (
                    <button onClick={() => addCart(product)}>
                      <AddToCartIcon />
                      Add to cart
                    </button>
                  )}
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
