import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'

import Product from '../../components/Products/Product/Product'
import useStyles from './styles'
import { Link } from 'react-router-dom'
import { Spinner } from '../../components/spinner/spinner'
import { useState } from 'react'
import { commerce } from '../../lib/commerce'
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import SideMenu from '../../components/SideMenu/SideMenu'

const ProductsListing = ({ onAddToCart, match, location }) => {
  const classes = useStyles()
  const history = useHistory()
  let query = location.search ? location.search.split('=')[1] : null
  const [products, setProducts] = useState(null)
  useEffect(() => {
    if (!query) history.push('/products')
    ;(async () => {
      const response = await commerce.products.list({
        query,
      })
      if (response.data) {
        setProducts(response.data)
      } else {
        setProducts([])
      }
    })()
  }, [])
  const initialState = {
    search: location.search ? decodeURI(location.search.substr(1)) : 'Latest',
    sortby: 'All Categories',
    date: null,
    category: null,
  }
  const [state, setstate] = React.useState(initialState)
  const [toggle, settoggle] = React.useState({
    sortby: false,
    filter: false,
  })
  return (
    <main className={classes.content}>
      <div>
        <h2>Showing results for : {query} </h2>
        <br />
        <br />
      </div>
      {products ? (
        <div style={{ display: 'flex' }}>
          <SideMenu />
          <>
            {products.length > 0 ? (
              <Grid container justify="start" spacing={4}>
                {products.map((product) => (
                  <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                    <Product
                      // category={category}
                      product={product}
                      onAddToCart={onAddToCart}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <h1>No Result Found</h1>
            )}
          </>
        </div>
      ) : (
        <Spinner />
      )}
    </main>
  )
}

export default withRouter(ProductsListing)
