import React from 'react'
import demoImg from '../assets/images/demo.jpg'
import './NewsModelBox.css'


const NewsModelBox = () => {
  return (
    <div className='model-overlay'>
        <div className="model-content">
            <span className="close-button">
                <i className='fa solid fa-xmark'></i>
            </span>
            <img src={demoImg} alt="Model-image" className='model-image' />
            <h2 className='modal-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsum.</h2>
            <p className="model-source">source : the Guardian</p>
            <p className="model-date">June 28, 2024, 09:47 PM</p>
            <p className="model-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel vero minima earum. Et est accusantium aut, dolores harum repudiandae eaque earum ratione facere. Voluptatum tenetur ipsum illo molestiae, eum maiores necessitatibus omnis atque! Maxime, voluptatibus.</p>
            <a href="" className='read-more-link'>Read more</a>
        </div>
        </div>
  )
}

export default NewsModelBox