import { createContext, useState } from 'react'
import { CAMERA_PRODUCTS } from './../data/builderData';

export const BuilderContext = createContext()

export default function BuilderProvider({ children }) {
  const [products, setProducts] = useState(CAMERA_PRODUCTS)

  const value = {
    products,
    setProducts,
  }

  return (
    <BuilderContext.Provider value={value}>
      {children}
    </BuilderContext.Provider>
  )
}