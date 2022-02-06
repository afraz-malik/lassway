import React from 'react'
import FooterCss from './Footer.module.scss'
const Footer = () => {
  return (
    <div className={FooterCss.container}>
      <div className={FooterCss.logo}>
        <img alt="" src="images/image 8.png" />
      </div>
      <div className={FooterCss.social}>
        <img alt="" src="images/facebook-fill 1.png" />
        <img alt="" src="images/instagram-fill 1.png" />
        <img alt="" src="images/twitter-fill 1.png" />
      </div>
      <div className={FooterCss.details}>
        <p>
          Sneakertopia Los Angeles inside HHLA (formerly The Promenade at Howard
          Hughes) 6081 Center Drive, Ste 222 LA, CA 90045
        </p>
      </div>
    </div>
  )
}

export default Footer
