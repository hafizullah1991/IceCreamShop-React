import react, {useState} from "react";
import './Testimonials.css';
import img1 from '../assets/Main_upscayl_4x_ultrasharp.png'
import img2 from '../assets/linkding image.jpeg'



const Testimonials = ({img, feedback, name}) => {
    
  return (
    <div className="testimonials-section">
      <img src={img} alt={name} className="testimonial-img" />
      <p className="testimonial-feedback">{feedback}</p>
      <p className="testimonial-name">{name}</p>
     
    </div>
  )
}

export default Testimonials
