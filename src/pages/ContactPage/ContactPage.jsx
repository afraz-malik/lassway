import React from 'react'
import ContactPageCss from './ContactPage.module.scss'
const ContactPage = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <hr />
      <div className={ContactPageCss.container}>
        {/* <div className={ContactPageCss.box}>Send us an email</div> */}
        <div>
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <a href="mailto:support@lassway.com">support@lassway.com</a> (Customer
          support)
        </div>
        {/* <div>
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <a href="mailto:afrazmalik321@gmail.com">
            afrazmalik321@gmail.com
          </a>{' '}
          (Customer support)
        </div> */}
      </div>
      <div className={ContactPageCss.links}>
        <i class="fab fa-facebook"></i>
        <div />
        <i class="fab fa-twitter"></i>
      </div>
    </div>
  )
}

export default ContactPage
