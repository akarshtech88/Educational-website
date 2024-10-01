import React from 'react'
import './hero.css'
import { HiArrowLongRight } from "react-icons/hi2";
import Title from '../../common/title/Title';

// work for home page routing 


function Hero() {
  return (
    <>
      <section className='hero'>
       <div className="container">
             <div className="row">
              <Title subtitle="WELCOME TO ACADEMIA" title="Best Online Education "/>
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis non asperiores eaque laborum animi deleniti aspernatur inventore, sapiente quidem! Quos quae doloribus dolores officiis soluta suscipit ratione voluptatibus aspernatur. </p>
               <div className="button">
                <button className='primary-btn'>
                    GET STARTED NOW <HiArrowLongRight />
                </button>
                <button>
                     VIEW COURSE <HiArrowLongRight />
                </button>
               </div>
             </div>
       </div>
         
      </section>
      <div className="margin"></div>
    </>
  )
}

export default Hero

