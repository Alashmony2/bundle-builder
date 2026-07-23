import { createContext, useState, useEffect } from 'react'
import { CAMERA_PRODUCTS } from './../data/builderData';

export const BuilderContext = createContext()

export default function BuilderProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('bundle-builder')

    return savedProducts
      ? JSON.parse(savedProducts)
      : CAMERA_PRODUCTS
  })

  const increaseQuantity = (id, colorIndex = null) => {
    setProducts((prev) =>
      prev.map((product) => {
        if (product.id !== id) return product

        if (product.colors.length === 0) {
          return {
            ...product,
            quantity: product.quantity + 1,
          }
        }

        return {
          ...product,
          colors: product.colors.map((color, index) =>
            index === colorIndex
              ? {
                ...color,
                quantity: color.quantity + 1,
              }
              : color
          ),
        }
      })
    )
  }

  const decreaseQuantity = (id, colorIndex = null) => {
    setProducts((prev) =>
      prev.map((product) => {
        if (product.id !== id) return product

        if (product.colors.length === 0) {
          return {
            ...product,
            quantity: Math.max(product.quantity - 1, 0),
          }
        }

        return {
          ...product,
          colors: product.colors.map((color, index) =>
            index === colorIndex
              ? {
                ...color,
                quantity: Math.max(color.quantity - 1, 0),
              }
              : color
          ),
        }
      })
    )
  }

  const getProductQuantity = (product) => {
    if (product.colors.length > 0) {
      return product.colors.reduce(
        (total, color) => total + color.quantity,
        0
      )
    }

    return product.quantity
  }

  const changeActiveColor = (id, colorIndex) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? {
            ...product,
            activeColor: colorIndex,
          }
          : product
      )
    )
  }

  const selectedCameraCount = products.filter(
    (product) => getProductQuantity(product) > 0
  ).length

  const summary = products.reduce(
    (acc, product) => {
      let quantity = 0

      if (product.colors.length > 0) {
        quantity = product.colors.reduce(
          (total, color) => total + color.quantity,
          0
        )
      } else {
        quantity = product.quantity
      }

      if (quantity === 0) return acc

      acc.total += Number(product.price) * quantity

      if (product.originalPrice) {
        acc.originalTotal += Number(product.originalPrice) * quantity
      } else {
        acc.originalTotal += Number(product.price) * quantity
      }

      return acc
    },
    {
      total: 0,
      originalTotal: 0,
    }
  )

  summary.savings = summary.originalTotal - summary.total

  const saveConfiguration = () => {
    localStorage.setItem(
      'bundle-builder',
      JSON.stringify(products)
    )
    alert('Your system has been saved!')
  }

  const value = {
    products,
    increaseQuantity,
    decreaseQuantity,
    changeActiveColor,
    selectedCameraCount,
    summary,
    saveConfiguration,
  }

  return (
    <BuilderContext.Provider value={value}>
      {children}
    </BuilderContext.Provider>
  )
}