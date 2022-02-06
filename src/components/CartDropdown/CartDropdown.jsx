import React from 'react'
import './CartDropdown.scss'
// import Button from '../button/button'
import Button from '../button/button'
import { withRouter } from 'react-router-dom'
import CartItems from '../cart-items/cart-item'
const CartDropdown = ({ cart, history, dispatch, match }) => {
  return (
    <div className="cart" id="cart">
      {
        <div className="cart-items">
          {cart.line_items && cart.line_items.length ? (
            cart.line_items.map((item) => (
              <CartItems key={item.id} item={item} />
            ))
          ) : (
            <span className="empty-message">Your Cart is Empty</span>
          )}
        </div>
      }
      {cart.line_items && cart.line_items.length > 0 ? (
        <Button
          inverted="true"
          onClick={() => {
            history.push(`${match.path}cart`)
            //   dispatch(toggleCart())
          }}
        >
          Go to Cart
        </Button>
      ) : null}
    </div>
  )
}
export default withRouter(CartDropdown)
