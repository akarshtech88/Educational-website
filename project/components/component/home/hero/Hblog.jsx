import React from "react"
import "../../blog/blog.css"
import { blog } from "../../../dumydata"
import Title from "../../common/title/Title"
import { FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaComments } from "react-icons/fa";
// copy code of blog => blogCard

const Hblog = () => {
  return (
    <>
      <section className='blog'>
        <div className='container'>
          <Title subtitle='OUR BLOG' title='Recent From Blog' />
          <div className='grid2'>
            {blog.slice(0, 3).map((val) => (
              <div className='items shadow'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <div className='admin flexSB'>
                    <span>
                    <FaUser />
                      <label htmlFor=''>{val.type}</label>
                    </span>
                    <span>
                    <SlCalender />
                      <label htmlFor=''>{val.date}</label>
                    </span>
                    <span>
                    <FaComments />
                      <label htmlFor=''>{val.com}</label>
                    </span>
                  </div>
                  <h1>{val.title}</h1>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hblog