import React from 'react'
import './HomeItem.scss'
import Hover from 'react-3d-hover'
import Card from 'react-animated-3d-card'

//Router
import { withRouter } from 'react-router-dom'

const HomeItem = ({ category, history, match }) => {
  return (
    // <Card style={{ flex: '1 1 auto' }}>
    <div
      className={`menu-item`}
      // onClick={() => history.push(`${match.path}shop/${routeName}`)}
      onClick={() => history.push(`${match.path}products/${category.name}`)}
    >
      {/* <Hover scale={1.2} perspective={900} speed={500}> */}
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${
            category.assets.length > 0
              ? category.assets[0].url
              : 'https://media.istockphoto.com/photos/woman-holding-sale-shopping-bags-consumerism-shopping-lifestyle-picture-id1254508881?b=1&k=20&m=1254508881&s=170667a&w=0&h=e8irxc-knpSghyK9ZI19uOOHv0QDEWscs2O4BwGRcLA='
          })`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{category.name.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
      {/* </Hover> */}
    </div>
    // </Card>
  )
}

export default withRouter(HomeItem)
