import React from 'react'
import NavBar from '../features/navbar/NavBar'
import ProductDetail from '../features/product/components/ProductDetails'

export default function ProductDetailsPage() {
  return (
    <div>
      <NavBar>
        <ProductDetail></ProductDetail>
      </NavBar>
    </div>
  )
}
