import React from 'react'
import Title from '../common/title/Title'

import { homeAbout } from '../../dumydata'
import Awrapper from './Awrapper'
import "./about.css"

function AboutCard() {
  return (
    <div>
      <section className="aboutHome">
        <div className="container flexSB">
            <div className="left row">
                <img src="./images/about.webp" alt=""/>
            </div>
            <div className="right row">
                <Title subtitle="LEARN ANYTHING"  title="Benefit About Online Learning Expertise"/>
                <div className="items">
                    {homeAbout.map((val)=>(
                        <div className="item flexSB">
                            <div className="img">
                                <img src={val.cover} alt=""/>
                            </div>
                            <div className="text">
                                <h2>{val.title}</h2>
                                <p>{val.desc}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
      <Awrapper/>
    </div>
  )
}

export default AboutCard
