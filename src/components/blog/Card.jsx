import React from "react"
import "./blog.css"
import { blog } from "../../assets/data/data"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"

export const Card = () => {
  return (
    <>
      <section className='blog'>
        <div className='container grid3'>
          {blog.map((item) => (
            <Link to={`/details/${item.id}`} className='link'>
            <div className='box boxItems' key={item.id}>
              <div className='img'>
                <img src={item.cover} alt='' />
              </div>
              <div className='details'>
                <div className='tag'>
                  <AiOutlineTags className='icon' />
                  <a href='/'>#{item.category}</a>
                </div>
                  <h3>{item.title}</h3>
                
      
                  <p>{item.fulldesc.slice(0, 180)}...</p>                
                <div className='date'>
                
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.date}</label>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
