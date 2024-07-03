import React from 'react'
import "./NewsLetter.css"

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive offer on Your Email</h1>
      <p>Subrcribe to our Newsletter and stay updated</p>
      <div>
        <input type="email"  placeholder='Your Email ID'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter