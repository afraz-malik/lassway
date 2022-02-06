import React from 'react'
import {
  Card as MCard,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import Card from 'react-animated-3d-card'

import useStyles from './styles'
import { Link } from 'react-router-dom'

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles()
  const handleAddToCart = () => onAddToCart(product.id, 1)

  return (
    <MCard className={classes.root}>
      <Link to={`/product-details/${product.id}`}>
        <div>
          <CardMedia
            className={classes.media}
            image={product.image.url}
            title={product.name}
          />
          <CardContent>
            <div className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
            </div>
            <div className={classes.details}>
              <Typography
                dangerouslySetInnerHTML={{ __html: product.description }}
                variant="body2"
                color="textSecondary"
                component="p"
                // className={classes.details}
              />
            </div>
          </CardContent>
        </div>
      </Link>

      <CardActions disableSpacing className={classes.cardActions}>
        {/* <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton> */}
        <Button
          variant="contained"
          style={{
            marginRight: '20px',
            backgroundColor: '#1266f1',
            color: 'white',
            fontSize: '12px',
          }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          style={{ marginBottom: 0 }}
        >
          ${product.price.formatted}
        </Typography>
      </CardActions>
    </MCard>
  )
}

export default Product
