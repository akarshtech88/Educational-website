import React from "react"
import { testimonal } from "../../../dumydata"
import Title from "../../common/title/Title";
import "./style.css"
import { RiContractLeftFill } from "react-icons/ri";

const Test = () => {
  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>
          <Title subtitle='TESTIMONIAL' title='Our Successful Students' />

          <div className='content grid2'>
            {testimonal.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <RiContractLeftFill />
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Test