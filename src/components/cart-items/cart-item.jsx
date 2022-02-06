import React from 'react'
import './cart-item.scss'

const Cartitems = ({ item }) => (
  <div className="cart-item">
    <img alt="itemImg" src={item.image.url} />
    <div className="details">
      <span className="name">{item.name}</span>
      <span>
        {item.selected_options.map((op) => (
          <span>
            {op.group_name}:{op.option_name}
          </span>
        ))}
      </span>
      <span className="price">
        {item.quantity} x ${item.price.raw}
      </span>
    </div>
  </div>
)

export default React.memo(Cartitems)
