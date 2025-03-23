import './contactus.css'
import NavBar from "./home/nav"
import Footer from "./home/footer"
import MobileNav from './MobileNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faMessage } from '@fortawesome/free-solid-svg-icons';
export default function ContactUs(){
    return(
        <>
            <MobileNav />
            <NavBar/>
                 <br />
                <h2 className="heading_h2">Contact Us</h2>
                <div className="contact_txt_container">
                    <p><FontAwesomeIcon icon={faPhone}/> Phone: +91 9876456732 <br /> 
                    <FontAwesomeIcon icon={faMessage}/> WhatsApp: +91 7685033212 <br /> 
                     <FontAwesomeIcon icon={faEnvelope}/> Mail: visionautotechofficial@gmail.com <br />
                     <FontAwesomeIcon icon={faLocationDot}/> Address: Khajuri Road,Shadipur,Distt.Yamuna Nagar
                     HARYANA, 135001
                    </p>
                </div>
            <Footer/>
        </>
    )
}