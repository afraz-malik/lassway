import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'

import Product from './Product/Product'
import useStyles from './styles'
import { Link } from 'react-router-dom'
import { Spinner } from '../spinner/spinner'
import { useState } from 'react'
import { commerce } from '../../lib/commerce'

const Products = ({ onAddToCart }) => {
  const classes = useStyles()
  const [categories, setcategories] = useState([])

  const [products, setProducts] = useState([])
  useEffect(() => {
    ;(async () => {
      const { data } = await commerce.products.list()
      setProducts(data)
      const response = await commerce.categories.list()
      console.log(response)
      setcategories(response.data)
    })()
  }, [])

  return (
    <main className={classes.content}>
      {categories.length > 0 && products.length > 0 ? (
        <>
          {categories.map((category) => (
            <div>
              <Link to={`/products/${category.name}`}>
                <h3 className={classes.category}>{category.name}</h3>
              </Link>{' '}
              {/* <hr /> */}
              <Grid container justify="start" spacing={4}>
                {products
                  .filter(
                    (product) =>
                      product.categories.length > 0 &&
                      product.categories.some((pd) => pd.name == category.name)
                  )
                  .map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                      <Product
                        category={category}
                        product={product}
                        onAddToCart={onAddToCart}
                      />
                    </Grid>
                  ))}
              </Grid>
            </div>
          ))}
        </>
      ) : (
        <Spinner />
      )}
    </main>
  )
}

export default Products
