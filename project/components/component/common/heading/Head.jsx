import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Head() {
  return (
    <>
    <section className='head'>
        <div className="container flexSB">
            <div className="logo">
                <h1>ACADEMIA</h1>
                <span>ONLINE EDUCATION & LEARNING</span>
            </div>
<div className="social">
<IoLogoFacebook />
<FaInstagram />
<FaTwitter />
<FaYoutube />
</div>
        </div>
        
      
    </section>
    </>
  )
}

export default Head
