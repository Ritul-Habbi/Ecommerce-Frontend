import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium libero cum facilis provident tempore autem tenetur, officiis quasi explicabo nam repellendus neque, officia accusantium et at cupiditate quae sapiente ex? Magnam, sed repudiandae atque sequi, ducimus ea molestias fuga voluptatibus odio neque fugiat velit, vel ipsum reprehenderit iste blanditiis rerum?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ad a cum quaerat perferendis id dicta sunt architecto est vel? Maiores, quo nesciunt perspiciatis quaerat dolorum molestias mollitia doloribus inventore?</p>
      </div>
    </div>
  )
}

export default DescriptionBox