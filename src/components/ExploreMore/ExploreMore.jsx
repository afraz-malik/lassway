import React from 'react'
import Product from '../Products/Product/Product'
import ExploreMoreCss from './ExploreMore.module.scss'

// Dummy products Array
const ExploreMore = ({ products, onAddToCart }) => {
  return (
    <div className={ExploreMoreCss.explore}>
      <h1>Related Products</h1>
      <div className={ExploreMoreCss.cards}>
        {products
          .filter((pd, idx) => idx < 3) // This will always render first three products
          .map((pd) => (
            <Product key={pd.id} product={pd} onAddToCart={onAddToCart} />
          ))}
      </div>
    </div>
  )
}

export default ExploreMore
