import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
  
        <div className="footer">
            <span>SPACEX © 2023</span>
            <a href="https://twitter.com/spacex" rel="noopener" target="_blank" class="social">TWITTER</a>
            <a href="https://www.youtube.com/spacex" rel="noopener" target="_blank" class="social">YOUTUBE</a>
            <a href="https://www.instagram.com/spacex/" rel="noopener" target="_blank" class="social">INSTAGRAM</a>
            <a href="https://www.flickr.com/photos/spacex" rel="noopener" target="_blank" class="social">FLICKR</a>
            <a href="https://www.linkedin.com/company/spacex" rel="noopener" target="_blank" class="social">LINKEDIN</a>
            <a href="/media/privacy_policy_spacex.pdf" target="_blank" class="social">PRIVACY POLICY</a>
            <a href="/supplier/" class="social">SUPPLIERS</a>
            <p>Created by Somossy László ©</p>
        </div>
  )
}

export default Footer