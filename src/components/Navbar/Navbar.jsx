import React, { useEffect, useState } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Button,
  Menu,
  Typography,
} from '@material-ui/core'
// import { Link } from 'react-router-dom'
import { ShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/commerce.png'
import useStyles from './styles'
import CartDropdown from '../CartDropdown/CartDropdown'
import { useHistory } from 'react-router-dom'

const PrimarySearchAppBar = ({ cart, totalItems }) => {
  const [search, setsearch] = useState('')
  const history = useHistory()
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  // usestat/
  const [toggleCart, settoggleCart] = useState(false)
  const classes = useStyles()
  const location = useLocation()

  useEffect(() => {
    window.addEventListener('mouseup', clickEvent)

    return () => {
      window.removeEventListener('mouseup', clickEvent)
    }
  }, [])

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
  const clickEvent = (e) => {
    var container = document.getElementById('cart')
    var container2 = document.getElementById('cartIcon')

    if (
      container &&
      !container2.contains(e.target) &&
      !container.contains(e.target)
    ) {
      settoggleCart(false)
    }
  }
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null)

  const mobileMenuId = 'primary-search-account-menu-mobile'

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          component={Link}
          to="/cart"
          aria-label="Show cart items"
          color="inherit"
        >
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart fontSize="inherit" style={{ fontSize: '30px' }} />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  )

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="commerce.js"
              height="35px"
              className={classes.image}
            />
            LasSway
          </Typography>
          <div className="NavBarRight">
            <div className="grow">
              <div class="input-group">
                <div class="form-outline">
                  <input
                    type="search"
                    id="form1"
                    class="form-control"
                    value={search}
                    onChange={(e) => setsearch(e.target.value)}
                    style={{
                      borderBottom: '1px solid lightgrey',
                      borderLeft: '1px solid lightgrey',
                      height: '42px',
                    }}
                  />
                  <label class="form-label" for="form1">
                    Search
                  </label>
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    setsearch('')
                    window.location = `/search?keywords=${search}`
                  }}
                >
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
            <div className={classes.button}>
              <Link
                to={'/products'}
                className={`${classes.linkss} allproducts`}
              >
                Products
              </Link>
              <Link to={'/about'} className={`${classes.linkss} allproducts`}>
                About Us
              </Link>
              <Link to={'/contact'} className={`${classes.linkss} allproducts`}>
                Contact Us
              </Link>
              <IconButton
                component={Link}
                // to="/cart"
                onClick={() => settoggleCart(!toggleCart)}
                aria-label="Show cart items"
                color="inherit"
                id="cartIcon"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
              {toggleCart ? <CartDropdown cart={cart} /> : null}
            </div>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                style={{ backgroundColor: 'rgb(18, 102, 241)' }}
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="/products">
                    Products
                  </a>
                </li>{' '}
                <li>
                  <a class="dropdown-item" href="/about">
                    About Us
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/contact">
                    Contact Us
                  </a>
                </li>
                <li>
                  <div class="input-group">
                    <input
                      type="search"
                      class="form-control rounded"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="search-addon"
                      value={search}
                      onChange={(e) => setsearch(e.target.value)}
                    />
                    <button
                      type="button"
                      class="btn btn-outline-primary"
                      onClick={() => {
                        setsearch('')
                        window.location = `/search?keywords=${search}`
                      }}
                    >
                      <i class="fas fa-search"></i>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  )
}

export default PrimarySearchAppBar
