import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import ProductCoverCss from './ProductCover.module.scss'

// Getting all images from Product API in Product Details Page
const ProductCover = ({ assets }) => {
  console.log(assets)
  const [source, setsource] = React.useState(
    assets.length > 0 ? (assets[0].is_image ? assets[0].url : null) : null
  )
  const [index, setindex] = useState(0)
  useEffect(() => {
    setsource(
      assets.length > 0 ? (assets[0].is_image ? assets[0].url : null) : null
    )
  }, [assets])

  // Taking slider to slide upon click
  var y = document.getElementsByClassName('slide')
  const scrollLeft = () => {
    // for (let i = 0; i < 2; i++) {
    //   y[i].scrollLeft -= 200
    // }
    if (index < assets.length) {
      let idx = index - 1
      setsource(assets[idx].url)
      setindex(idx)
    }
  }
  const scrollRight = () => {
    console.log(index, assets.length)
    if (index < assets.length) {
      let idx = index + 1
      setsource(assets[idx].url)
      setindex(idx)
    }
    // for (let i = 0; i < 2; i++) {
    //   y[i].scrollLeft += 200
    // }
  }

  return (
    <Card>
      <div className={ProductCoverCss.productCover}>
        {/* <div className={ProductCoverCss.like}>
          <img
            alt=""
            src="https://afraz-malik.github.io/sneakertopia/images/Vector.png"
          />
        </div> */}
        <div className={ProductCoverCss.cover}>
          <img alt="" src={source} />
        </div>
        <div className={ProductCoverCss.slider}>
          <div className={ProductCoverCss.prev} onClick={() => scrollLeft()}>
            <h3>PREV</h3>
            <img
              alt=""
              src="https://afraz-malik.github.io/sneakertopia/images/Group%2014.svg"
            />
          </div>
          <div className={ProductCoverCss.slides}>
            <ul className="slide">
              {assets.length > 0 &&
                assets
                  // .filter((asset) => asset.is_img)
                  .map((asset, idx) => (
                    <li key={idx}>
                      <img
                        alt=""
                        src={asset.url}
                        onClick={(e) => setsource(e.target.src)}
                      />
                    </li>
                  ))}
            </ul>
          </div>
          <div className={ProductCoverCss.next} onClick={() => scrollRight()}>
            <h3>NEXT</h3>
            <img
              alt=""
              src="https://afraz-malik.github.io/sneakertopia/images/Group%202.svg"
            />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProductCover
