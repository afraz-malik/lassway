import React from 'react'
import AboutPageCss from './AboutPage.module.scss'
import logo from '../../assets/3.png'

const AboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <hr />
      <div className={AboutPageCss.container}>
        <div className={AboutPageCss.col}>
          <img src={logo} alt="commerce.js" height="35px" />
        </div>
        <div className={AboutPageCss.col2}>
          <br />
          <p>
            <i>
              Las Sway is an a luxury apparel & accessories brand, manufacturer
              and online retailer based in the United supported by millions of
              highly engaged social media followers and customers in Africa ,
              North America , Europe and Middle East countries.
            </i>
          </p>
          <p>
            Created in 2022 by a group of friends. Las Sway has grown from a
            screen printing operation in a garage, into one of the fastest
            growing and most recognisable brands in. This growth comes from a
            devotion to producing innovative, effective performance wear and an
            ever-expanding social presence.
          </p>
          <i style={{ float: 'right' }}>~ Million Kassaye</i>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
