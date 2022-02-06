import React, { useState, useEffect } from 'react'
import { CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Navbar, Products, Cart, Checkout } from './components'
import { commerce } from './lib/commerce'
import HomePage from './pages/HomePage/HomePage'
import { Spinner, SpinnerHOC } from './components/spinner/spinner'
import Footer from './components/Footer/Footer'
import ProductRoutes from './components/Products/ProductRoutes'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import ProductsListing from './pages/ProductListing/Products'
import SearchPage from './pages/ProductListing/SearchPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'
const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [cart, setCart] = useState({})
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState('')

  const fetchProducts = async () => {
    // const { cat } = await commerce.categories.list()
    // console.log(cat)
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity, varient) => {
    const item = await commerce.cart.add(productId, quantity, varient)

    setCart(item.cart)
  }

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity })

    setCart(response.cart)
  }

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId)

    setCart(response.cart)
  }

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty()

    setCart(response.cart)
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh()

    setCart(newCart)
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      )

      setOrder(incomingOrder)

      refreshCart()
    } catch (error) {
      setErrorMessage(error.data.error.message)
    }
  }

  useEffect(() => {
    // fetchProducts()
    fetchCart()
  }, [])

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  return (
    <Router>
      <div>
        <CssBaseline />
        <Navbar
          totalItems={cart.total_items}
          handleDrawerToggle={handleDrawerToggle}
          cart={cart}
        />
        <Switch>
          <Route exact path={'/'}>
            <HomePage />
          </Route>
          <Route path="/products">
            {' '}
            <ProductRoutes
              onAddToCart={handleAddToCart}
              handleUpdateCartQty={handleUpdateCartQty}
            />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route path="/checkout" exact>
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
          <Route path="/product-details/:id">
            <ProductDetails onAddToCart={handleAddToCart} />
          </Route>
          <Route path="/search">
            <SearchPage onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </div>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
