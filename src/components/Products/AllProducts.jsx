import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { withRouter } from 'react-router'
import Product from './Product/Product'
import useStyles from './styles'
import { Link } from 'react-router-dom'
import { commerce } from '../../lib/commerce'
import { Spinner } from '../spinner/spinner'

const AllProducts = (props) => {
  const [products, setproducts] = useState([])
  useEffect(() => {
    ;(async () => {
      const response = await commerce.products.list({
        category_slug: [match.params.category],
      })
      console.log(response)
      setproducts(response.data)
    })()
  }, [])

  const { onAddToCart, match } = props
  const classes = useStyles()
  return (
    <main className={classes.content}>
      {products.length > 0 ? (
        <div>
          <h3 className={classes.main_category}>{match.params.category}</h3>
          <Grid container justify="start" spacing={4}>
            {products.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            ))}
          </Grid>
        </div>
      ) : (
        <Spinner />
      )}
    </main>
  )
}

export default withRouter(AllProducts)
