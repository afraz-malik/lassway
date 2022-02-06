import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

import CartItem from './CartItem/CartItem'
import useStyles from './styles'

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles()

  const handleEmptyCart = () => onEmptyCart()

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,{' '}
      <Link className={classes.link} to="/">
        <u>start adding some</u>
      </Link>
      !
    </Typography>
  )

  if (!cart.line_items) return 'Loading'

  const renderCart = () => (
    <>
      <div className={classes.cartRows}>
        {cart.line_items.map((lineItem) => (
          <div className={classes.cartRow}>
            <CartItem
              item={lineItem}
              onUpdateCartQty={onUpdateCartQty}
              onRemoveFromCart={onRemoveFromCart}
            />
          </div>
        ))}
      </div>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty cart
          </Button>
          <Button
            className={classes.checkoutButton}
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  )

  return (
    <Container className={classes.cartcontainer}>
      {/* <div className={classes.toolbar} /> */}
      <Typography
        className={classes.title}
        variant="h3"
        gutterBottom
        style={{ marginTop: '0' }}
      >
        Your Shopping Cart
      </Typography>
      <br />
      <br />
      <br />
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
  )
}

export default Cart
