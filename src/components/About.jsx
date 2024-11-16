import React from 'react'
import './About.css'
const About = (props) => {
  return (
    <div className='about-section' id='about'>
       
        <div className="feature-box">
           <h3>{props.title} </h3> 
            <p>{props.description}</p>
                 {props.img}
        </div>
     
    </div>
  )
}

export default About
