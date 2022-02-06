import React from 'react'
import { Route } from 'react-router-dom'
import AllProducts from './AllProducts'
import Products from './Products'
import { withRouter } from 'react-router'
const ProductRoutes = ({
  match,
  categories,
  products,
  handleUpdateCartQty,
  onAddToCart,
}) => {
  console.log(match.path)
  return (
    <div style={{ width: '100%' }}>
      <Route path={`${match.path}/:category`}>
        <AllProducts
          products={products}
          categories
          onAddToCart={onAddToCart}
          handleUpdateCartQty={handleUpdateCartQty}
        />
      </Route>
      <Route exact path={`${match.path}`}>
        <Products
          products={products}
          onAddToCart={onAddToCart}
          handleUpdateCartQty={handleUpdateCartQty}
          categories={categories}
        />
      </Route>
    </div>
  )
}

export default withRouter(ProductRoutes)
