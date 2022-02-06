import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'
import Card from '../../components/Card/Card'
// import CommentsBox from '../../components/CommentsBox/CommentsBox'
// import ExploreMore from '../../components/ExploreMore/ExploreMore'
// import Footer from '../../components/Footer/Footer'
import ProductCover from '../../components/ProductCover/ProductCover'
import ProductDetailsCss from './ProductDetails.module.scss'
// Dummy product api
import { commerce } from '../../lib/commerce'
import { Spinner } from '../../components/spinner/spinner'
import ExploreMore from '../../components/ExploreMore/ExploreMore'

const ProductDetails = ({ onAddToCart, match }) => {
  const [product, setproduct] = useState(null)
  const [varient, setvarient] = useState([])
  const [size, setsize] = useState(null)
  useEffect(() => {
    window.scrollTo(0, 0)
    ;(async () => {
      const response = await commerce.products.retrieve(match.params.id)
      console.log(response)
      setproduct(response)
    })()
  }, [match.params.id])
  useEffect(() => {}, [])
  console.log(product)
  console.log(size)
  const handleVarients = (vg, op) => {
    if (vg.name.toLowerCase() == 'size') {
      setsize(op)
    }
    setvarient({ ...varient, [vg.id]: op.id })
  }
  console.log(varient)
  return (
    <div className={ProductDetailsCss.container}>
      {product ? (
        <div className={ProductDetailsCss.body}>
          <div className={ProductDetailsCss.cards}>
            <div className={ProductDetailsCss.col60}>
              <div className={ProductDetailsCss.firstCover}>
                <ProductCover assets={product.assets} />
              </div>
              <Card title="Description">
                <p>{product.description.replace(/<\/?[^>]+(>|$)/g, '')}</p>
              </Card>
              {/* <Card title="About The Designer">
                <div className={ProductDetailsCss.aboutDesigner}>
                  <div className={ProductDetailsCss.imgbox}>
                    <img alt="" src={productApi.designer.image} />
                    <h3>{productApi.designer.name}</h3>
                  </div>
                  <p>{productApi.designer.detail}</p>
                </div>
              </Card> */}
              {/* <CommentsBox comments={productApi.comments} /> */}
            </div>
            <div className={ProductDetailsCss.col37}>
              <div className={ProductDetailsCss.secondCover}>
                <ProductCover assets={product.assets} />
              </div>
              <Card title={product.name}>
                <div className={ProductDetailsCss.details}>
                  <div className={ProductDetailsCss.row}>
                    <div className={ProductDetailsCss.col}>
                      <h3>SKU</h3>
                      <p>{product.sku || 'Not Available'}</p>
                    </div>
                    <div className={ProductDetailsCss.col}>
                      <h3>Inventory</h3>
                      <p>{product.inventory.available || 1} items left</p>
                    </div>
                  </div>
                  {/* <div className={ProductDetailsCss.row}>
                    <div className={ProductDetailsCss.col}>
                      <h3>SKU</h3>
                      <p>{productApi.sku}</p>
                    </div>
                    <div className={ProductDetailsCss.col}>
                      <h3>Upper material</h3>
                      <p>{productApi.upper_material}</p>
                    </div>
                  </div> */}
                  {product.variant_groups &&
                    product.variant_groups.map((vg) => (
                      <div className={ProductDetailsCss.row}>
                        <div className={ProductDetailsCss.col100}>
                          <h3>{vg.name}</h3>
                          <div className={ProductDetailsCss.boxes}>
                            {vg.options.map((option, idx) => (
                              <div
                                className={ProductDetailsCss.span}
                                key={option.id}
                                onClick={() => handleVarients(vg, option)}
                                style={
                                  varient[vg.id] == option.id
                                    ? {
                                        backgroundColor: 'black',
                                        color: 'white',
                                      }
                                    : null
                                }
                              >
                                {option.name}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  {/* <div className={ProductDetailsCss.row}>
                    <div className={ProductDetailsCss.col100}>
                      <h3>Color</h3>
                      <div className={ProductDetailsCss.boxes}>
                        {productApi.colors.map((color, idx) => (
                          <div className={ProductDetailsCss.span} key={color}>
                            {color}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div> */}
                </div>
              </Card>
              <Card title="Buy Now">
                <div className={ProductDetailsCss.buyFrom}>
                  <div
                    className={ProductDetailsCss.network}
                    onClick={() => onAddToCart(product.id, 1, varient)}
                  >
                    <div className={ProductDetailsCss.left}>
                      {/* <img alt="" src="images/Ellipse 103.svg" />
                  
                  <img alt="" src="images/image 4.png" /> */}
                      <h3>Add to Cart</h3>
                    </div>
                    <div className={ProductDetailsCss.right}>
                      <h4>
                        $
                        {size
                          ? size.price.raw + product.price.raw
                          : product.price.raw}
                      </h4>
                      <div className={ProductDetailsCss.cart}>
                        <img
                          alt=""
                          src="https://afraz-malik.github.io/sneakertopia/images/sale%201.svg"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div
                className={ProductDetailsCss.network}
                style={{ opacity: '0.3' }}
              >
                <div className={ProductDetailsCss.left}>
                  <img alt="" src="images/Ellipse 103 red.svg" />
                  <img alt="" src="images/image 5.png" />
                </div>
                <div className={ProductDetailsCss.right}>
                  <h4>${productApi.price}</h4>
                  <div className={ProductDetailsCss.cart}>
                    <img
                      alt=""
                      src="https://afraz-malik.github.io/sneakertopia/images/sale%201.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={ProductDetailsCss.network}>
                <div className={ProductDetailsCss.left}>
                  <img alt="" src="images/Ellipse 103.svg" />
                  <img alt="" src="images/image 6.png" />
                </div>
                <div className={ProductDetailsCss.right}>
                  <h4>${productApi.price}</h4>
                  <div className={ProductDetailsCss.cart}>
                    <img
                      alt=""
                      src="https://afraz-malik.github.io/sneakertopia/images/sale%201.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={ProductDetailsCss.network}>
                <div className={ProductDetailsCss.left}>
                  <img alt="" src="images/Ellipse 103.svg" />
                  <img alt="" src="images/image 7.png" />
                </div>
                <div className={ProductDetailsCss.right}>
                  <h4>${productApi.price}</h4>
                  <div className={ProductDetailsCss.cart}>
                    <img
                      alt=""
                      src="https://afraz-malik.github.io/sneakertopia/images/sale%201.svg"
                    />
                  </div>
                </div>
              </div> */}
                </div>
              </Card>
              <div className={`${ProductDetailsCss.poster}`}>
                <img alt="" src="images/image 9ads.png" />
              </div>
            </div>
          </div>
          <ExploreMore
            products={product.related_products}
            onAddToCart={onAddToCart}
          />
        </div>
      ) : (
        <Spinner />
      )}
      {/* <Footer /> */}
    </div>
  )
}

export default withRouter(ProductDetails)
