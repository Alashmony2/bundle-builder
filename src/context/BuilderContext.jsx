import { createContext, useState } from 'react'
import { CAMERA_PRODUCTS } from './../data/builderData';

export const BuilderContext = createContext()

export default function BuilderProvider({ children }) {
  const [products, setProducts] = useState(CAMERA_PRODUCTS)

  const increaseQuantity = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? {
            ...product,
            quantity: product.quantity + 1,
          }
          : product
      )
    )
  }

  const decreaseQuantity = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? {
            ...product,
            quantity: Math.max(product.quantity - 1, 0),
          }
          : product
      )
    )
  }
  const value = {
    products,
    increaseQuantity,
    decreaseQuantity,
  }

  return (
    <BuilderContext.Provider value={value}>
      {children}
    </BuilderContext.Provider>
  )
}