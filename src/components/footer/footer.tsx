import React from 'react'
import { SiAdobe } from "react-icons/si";
import './footer.scss'

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="top-div">
          <div className="left-div">
            Behance
          </div>
          <div className="right-div">
            <div className="footer1"><h4>Built For Creatives</h4>
              <ul>
                <li>Find Inspiration</li>
                <li>Get Hired</li>
                <li>Sell Creative Assets</li>
                <li>Sell Freelance Services</li>
              </ul></div>
            <div className="footer2"><h4>Find Talent</h4>
              <ul>
                <li>Post a Job</li>
                <li>All Freelance Designers</li>
                <li>Graphic Designers</li>
                <li>Photograhers</li>
                <li>Video Editors</li>
                <li>Web Designers</li>
                <li>Illustrators</li>
              </ul></div>
            <div className="footer3"><h4>Behance
            </h4>
              <ul>
                <li>About Behance</li>
                <li>Adobe Protfolio</li>
                <li>Download the App</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Help Center</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="footer4"><h4>Social</h4>
              <ul>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Pinterest</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-div">
        <div className='bottom-left'> <SiAdobe />Adobe
          <a href="#">          @ 2024 Adobe Inc,All rights reserved.</a>
        </div>
        <ul className="bottom-right">
          <li>English</li>
          <li>TOU</li>
          <li>Privacy</li>
          <li>Community</li>
          <li>Do not sell or share my personal information</li>
        </ul>
      </div>
    </>
  )
}

export default Footer