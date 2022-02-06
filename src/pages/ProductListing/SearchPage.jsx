import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import SearchPageCss from './SearchPage.module.scss'
import Product from '../../components/Products/Product/Product'
import useStyles from './styles'
import { Spinner } from '../../components/spinner/spinner'
import { useState } from 'react'
import { commerce } from '../../lib/commerce'
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import SideMenu from '../../components/SideMenu/SideMenu'
const SearchPage = ({ location, onAddToCart }) => {
  const classes = useStyles()
  const history = useHistory()
  let query = location.search ? location.search.split('=')[1] : null
  const [products, setProducts] = useState(null)
  console.log(products)
  // const [count, setcount] = useState(0)
  const initialState = {
    search: location.search ? decodeURI(location.search.split('=')[1]) : null,
    sortby: 'All Categories',
    date: null,
    category: null,
  }
  const [state, setstate] = React.useState(initialState)
  const [toggle, settoggle] = React.useState({
    sortby: false,
    filter: false,
  })
  useEffect(() => {
    if (!query) history.push('/products')
    ;(async () => {
      const response = await commerce.products.list()

      if (response.data) {
        console.log(response.data)
        const dd = response.data.filter((pd) =>
          pd.name.toLowerCase().includes(decodeURI(query).toLowerCase())
        )
        setProducts(dd)
      } else {
        setProducts([])
      }
      // setcount(response.meta.pagination.count)
    })()
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0)
    setstate({
      ...state,
      search: location.search ? decodeURI(location.search.split('=')[1]) : null,
    })
    // eslint-disable-next-line
  }, [location.search])
  console.log(state)
  // const filteredProducts = products.filter(
  //   (pd) =>
  //     pd.categories && pd.categories.filter((cat) => cat.name == state.category)
  // )
  return (
    <div className={SearchPageCss.container}>
      <div className={SearchPageCss.body}>
        {products && products.length > 0 ? (
          <>
            <div className={SearchPageCss.super}>
              <h1>{products.length > 0 ? state.search : 'No Result Found'}</h1>
            </div>
            <div className={SearchPageCss.nav}>
              <ul>
                <li
                  onClick={() =>
                    settoggle({ ...toggle, filter: !toggle.filter })
                  }
                >
                  {toggle.filter ? 'Hide Filters' : 'Show Filters'}
                  <img
                    alt=""
                    className={`${SearchPageCss.arrow} fuckingarrow`}
                    src="https://afraz-malik.github.io/sneakertopia/images/Caret.png"
                    style={{ transform: toggle.filter ? 'rotate(0deg)' : null }}
                  />
                  &emsp; &emsp; &emsp;{' '}
                  <span
                    style={{
                      textDecoration: 'underline',
                      color: 'black',
                      display: toggle.filter ? 'inline-block' : 'none',
                    }}
                    onClick={() => setstate(initialState)}
                  >
                    Reset
                  </span>
                </li>
                <li>Showing {products.length || 0} Result(s)</li>
                <li>
                  <div className={SearchPageCss.box}>
                    <div
                      className={SearchPageCss.dropdown}
                      onClick={() =>
                        settoggle({ ...toggle, sortby: !toggle.sortby })
                      }
                    >
                      <span>Sort by</span>
                      <h3>{state.sortby}</h3>
                      <img
                        alt=""
                        src="https://afraz-malik.github.io/sneakertopia/images/Caret.png"
                      />
                    </div>
                    <div
                      className={SearchPageCss.dd_content}
                      style={
                        toggle.sortby
                          ? { display: 'block' }
                          : { display: 'none' }
                      }
                    >
                      <ul>
                        <li
                          onClick={() => {
                            setstate({ ...state, sortby: 'Name' })
                            settoggle({ ...toggle, sortby: false })
                          }}
                        >
                          Name
                        </li>
                        {/* <li
                          onClick={() => {
                            setstate({ ...state, sortby: 'New' })
                            settoggle({ ...toggle, sortby: false })
                          }}
                        >
                          Name (desc)
                        </li> */}
                        {/* <li
                          onClick={() => {
                            setstate({ ...state, sortby: 'Avaiablity' })
                            settoggle({ ...toggle, sortby: false })
                          }}
                        >
                          Availablity
                        </li> */}
                        <li
                          onClick={() => {
                            setstate({ ...state, sortby: 'Price (low-high)' })
                            settoggle({ ...toggle, sortby: false })
                          }}
                        >
                          Price (low-high)
                        </li>
                        <li
                          onClick={() => {
                            setstate({ ...state, sortby: 'Price (high-low)' })
                            settoggle({ ...toggle, sortby: false })
                          }}
                        >
                          Price (high-low)
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className={SearchPageCss.filter_cards}>
              {toggle.filter ? (
                <div className={SearchPageCss.sideMenu}>
                  <SideMenu
                    setstate={setstate}
                    state={state}
                    products={products}
                  />
                </div>
              ) : null}
              <div
                className={`${SearchPageCss.cards} ${
                  toggle.filter ? SearchPageCss.cardsWithFilter : null
                }`}
              >
                <Grid container spacing={4}>
                  {products.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                      <Product
                        // category={category}
                        product={product}
                        onAddToCart={onAddToCart}
                      />
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          </>
        ) : products ? (
          <h1>No Results Found</h1>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  )
}

export default withRouter(SearchPage)
