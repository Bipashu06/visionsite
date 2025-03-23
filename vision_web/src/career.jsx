import './career.css'
import { useEffect } from 'react';
import NavBar from './home/nav'
import Footer from './home/footer'
import MobileNav from './MobileNav';
export default function Career(){
    useEffect(() => {
        const script = document.createElement('script'); 
        script.src = "https://paperform.co/__embed.min.js"; 
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    return(
        <>
        <MobileNav />
        <NavBar />
        <br />
            <h2 className="heading_h2">Build Your Career in Automation with Us</h2>
            <div className="row">        
                <p><h2>Welcome to the Career Opportunities</h2> Vision Automation and Technology
                    We are always on the lookout for talented and driven individuals who are
                    passionate about shaping the future of automation. If you're ready 
                    to make a difference and grow with an innovative team, we invite 
                    you to apply for one of our exciting positions. Please fill out
                    the job application form below to take the next step in your
                    career journey with us. We're eager to learn more about you and
                    how you can contribute to our mission of driving cutting-edge
                    solutions in automation technology.</p>
                    
                    <div data-paperform-id="yr8zgonv"></div>
            
            </div>
        <Footer />
        </>
    )
}