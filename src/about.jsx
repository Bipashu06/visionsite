import NavBar from "./home/nav"
import Footer from "./home/footer"

import firstpage from './assets/firstpage.JPG'
import pdf from './assets/vision_cat.pdf'
import './about.css'
export default function About(){
    return(
        <>  
            <NavBar/>
                <div className="about_txt_container">
                    <br />
                    <hr />
                    <h2 className="heading_h2" >About Us</h2>
                    <p className="paragraph">At Vision Automation and Technology, we are pioneers in delivering cutting-edge automation solutions that transform businesses and industries. With a commitment to innovation and excellence, we specialize in providing custom-tailored automation systems designed to optimize efficiency, enhance productivity, and reduce operational costs. Our journey began with a vision to revolutionize the way industries approach automation, and today, we are proud to serve a diverse range of sectors, including manufacturing, logistics, energy, pharmaceuticals, and more. <br />
                    By leveraging the latest in PLCs, sensors, control systems, and IoT technologies, we help businesses unlock their full potential and stay ahead in an ever-evolving market. We integrate state-of-the-art hardware and software into seamless solutions that ensure maximum uptime, scalability, and adaptability for our clients’ operations. Our comprehensive approach covers everything from initial consultation and system design to installation, testing, and ongoing maintenance. <br />
                    Our team of experts brings decades of experience and a passion for solving complex challenges, constantly pushing the boundaries of what automation can achieve. Whether you’re looking to automate a single process or implement an entire system overhaul, we partner with you every step of the way, ensuring seamless integration and long-term support. We take pride in offering unparalleled customer service, with round-the-clock assistance and proactive monitoring to prevent issues before they arise. <br />
                    At Vision Automation and Technology, your success is our priority, and we believe in empowering businesses to achieve more through smart, sustainable automation. As we continue to grow, our focus remains on staying at the forefront of technological advancements, delivering results that not only meet but exceed our clients' expectations. Join us as we lead the way in automation, paving the path toward a more efficient, sustainable, and innovative future for your business.
                    </p>
                </div>
                <div className="catalog_container">
                    <img src={firstpage} alt="" />
                    <a href={pdf} className="read_btn">View</a>
                </div>
            <Footer/>
        </>
    )
}