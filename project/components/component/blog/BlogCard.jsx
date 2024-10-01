import React from "react"
import { blog } from "../../dumydata"
import { FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaComments } from "react-icons/fa";
const BlogCard = () => {
  return (
    <>
      {blog.map((val) => (
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
    </>
  )
}

export default BlogCard