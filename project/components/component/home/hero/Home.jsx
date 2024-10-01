import React from 'react'
import Hero from './Hero'
import AboutCard from '../../about/AboutCard';
import HAbout from './HAbout';
import Test from '../testimonal/Test';
import Hblog from './Hblog';
import Hprice from './Hprice';

function Home() {
  return (
    <div>
      <Hero/> 
      <AboutCard/>
      <HAbout/>
       <Test/>
       <Hblog/>
       <Hprice/>
    </div>
  )
}

export default Home
