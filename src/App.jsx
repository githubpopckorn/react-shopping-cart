import { useState } from "react"
import { IS_DEVELOPMENT } from "../config"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Products } from "./components/Products"
import { products as initialProducts } from "./mocks/products.json"
import { useFilter } from "./hooks/useFilter"
import { Cart } from "./components/Cart"
import { CartProvider } from "./context/cart"

function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilter()
  const filteredProducts = filterProducts(products)
  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer/>}
    </CartProvider>
  )
}

export default App
