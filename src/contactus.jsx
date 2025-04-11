import './contactus.css'
import NavBar from "./home/nav"
import Footer from "./home/footer"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faMessage } from '@fortawesome/free-solid-svg-icons';
export default function ContactUs(){
    return(
        <>
        
            <NavBar/>
                 <br />
                <h2 className="heading_h2">Contact Us</h2>
                <div className="contact_txt_container">
                    <p><FontAwesomeIcon icon={faPhone}/> Phone: +91 9876543215 <br /> 
                    <FontAwesomeIcon icon={faMessage}/> WhatsApp: +91 9847896542 <br /> 
                     <FontAwesomeIcon icon={faEnvelope}/> Mail: visionautotechofficial@gmail.com <br />
                     <FontAwesomeIcon icon={faLocationDot}/> Address: Xyx Streets, Abc city, New York , 110110
                    </p>
                </div>
            <Footer/>
        </>
    )
}