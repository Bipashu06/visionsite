import './imageslider.css'
import React, { useState, useEffect } from 'react';
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
import image3 from '../assets/3.jpg'
export default function Slider(){
    const images = [image1, image2, image3, ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
  
    useEffect(() => {
      const interval = setInterval(() => {
        handleNextSlide();
      }, 5000);
      return () => clearInterval(interval);
    })
  
    const handleNextSlide = () => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);

      }, 500);
    };
  
    const handlePrevSlide = () => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setIsFading(false);
      }, 500);
    };
  
    return(
        <div className="slider">
            <div className="upper_div">
                
            </div>
            {currentIndex === 0 && (
               <div className="box_1" id='first_box'>
                    <h1 className = "box_heading" >Vision Automation & Technologies</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi dolore aspernatur provident rerum aliquid ad velit, tempora quasi mollitia a, neque asperiores ipsa voluptas facilis explicabo, sint incidunt fuga nostrum?</p>
                    <a href="#" className='read_btn'>Read More</a>
                </div>
            )}
            {currentIndex === 1 && (
            <div className="box_1" id='second_box'>
                    <h1 className = "box_heading">Authorized Dealer</h1>
                    <p>We offer 50+ advanced automation, PLC, and electric products designed to optimize industrial operations. From cutting-edge robotic systems to reliable PLCs and efficient electrical components, we ensure seamless, innovative solutions.</p>
                    <a href="#" className='read_btn'>Read More</a>
            </div>
             )}
            {currentIndex === 2 && (
            <div className="box_1" id='third_box'>
                    <h1 className = "box_heading">Provision & Services</h1>
                    <p>We provide comprehensive automation and PLC solutions, including system integration, process optimization, and technical support. Our services enhance operational efficiency, streamline workflows, and ensure seamless industrial automation tailored to your needs.</p>
                    <a href="#" className='read_btn'>Read More</a>
            </div>
             )}
            <img
                loading='eager'
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className={`slide ${isFading ? 'fade' : ''}`}
            />
            <button className="prev" onClick={handlePrevSlide}>&#10094;</button>
            <button className="next" onClick={handleNextSlide}>&#10095;</button>
        </div>
        );
}
