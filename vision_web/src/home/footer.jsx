import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
export default function Footer(){
    return(
        <>
            <footer>
                <div className="section">
                <h2>Vision Automation & Technologies</h2>
               
                 <p><FontAwesomeIcon icon={ faEnvelope } /> visionautotechofficial@gmail.com</p>
                 <address>Khajuri Road, Shadipur, Yamunanagar Haryana
                    , 135003.
                 </address>
                 <p>&copy; Copyright. All Right Reserved.</p>
                 </div>
            </footer>
        </>
    )
}