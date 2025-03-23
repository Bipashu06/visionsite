import './welcome.css'
import image from '../assets/image.avif'
import { useEffect, useState } from 'react';
export default function Welcome(){
  const [windowidth, setWindowidth] = useState(window.innerWidth);

  function check(){
      setWindowidth(window.innerWidth);
  }
    useEffect(() => {
        window.addEventListener('resize', check)

        return() => {window.removeEventListener('resize', check)}
    })
    return(
      <>
        <div className="welcome_container">
            <div className="welcome">
            <div className="content_container">
                <h1 id='welcome_heading'>Welcome To Vision Automation & Technologies</h1>
                
                { windowidth < 600 && (<><br /><img src={image} alt="" /></>)}
                <p>Welcome to Vision Automation & Technologies, We are a leading provider of automation solutions, specializing in PLC training, programming, and panel design. Our mission is to empower industries with cutting-edge automation technologies, helping them improve efficiency and achieve operational excellence. Whether you’re looking to enhance your skills through our expert-led PLC training or need customized automation panels for your projects, Vision Automation & Technologies is here to support you at every step. Join us in shaping the future of industrial automation.</p>
                <a href="#" className='read_btn' id='welcome_btn'>Read More</a>
            </div>
            { windowidth >= 600 && (<img src={image} alt="" />)}
            </div>
        </div>
      </>
    );
}