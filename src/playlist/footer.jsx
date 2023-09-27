import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <div className='footer mt-5'>
      <div className="footer-header">
        <div className='footer-header-company'>
          <ul>
            <li>Company</li>
            <li>About</li>
            <li>Jobs</li>
            <li>For the record</li>
          </ul>
        </div>
        <div className='footer-header-communities'>
          <ul>
            <li>Communities</li>
            <li>For Artists</li>
            <li>Developers</li>
            <li>Advertising</li>
            <li>Investors</li>
          </ul>
        </div>
        <div className='footer-header-links'>
          <ul>
            <li>Useful links</li>
            <li>Support</li>
            <li>Free Mobile App</li>
          </ul>
        </div>
        <div className='footer-header-icons'>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-facebook"></i>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <li>Legal</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
          <li>About Ads</li>
          <li>Accessibility</li>
        </div>
        <div className="footer-bottom-right">
        <p>© 2023 Spotify AB</p>
        </div>
      </div>
    </div>
  )
}

export default footer