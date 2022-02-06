import React from 'react'
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@material-ui/core'

import useStyles from './styles'

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles()

  const handleUpdateCartQty = (lineItemId, newQuantity) =>
    onUpdateCartQty(lineItemId, newQuantity)

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId)

  return (
    <Card className={classes.cartitemss} style={{}}>
      {/* <div> */}
      <div className={classes.insideCartItmes}>
        <CardMedia
          image={item.image.url}
          alt={item.name}
          className={classes.media}
        />
        <Typography variant="h6">{item.name}</Typography>
      </div>
      <div className={classes.insideCartItmes}>
        <Typography variant="p">
          {item.selected_options.map((op) => (
            <span>
              {op.group_name}:{op.option_name}
            </span>
          ))}
        </Typography>
      </div>
      {/* </div> */}
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => handleRemoveFromCart(item.id)}
        >
          Remove
        </Button>
        <Typography variant="h6" style={{ marginLeft: '30px' }}>
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardActions>
    </Card>
  )
}

export default CartItem
