import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
export default function Footer(){
    return(
        <>
            <footer>
                <div className="section">
                <h2>Vision Automation & Technologies</h2>
               
                 <p><FontAwesomeIcon icon={ faEnvelope } /> techvisionofficial@gmail.com</p>
                 <address>Xyx Streets, Abc city, New York
                    , 110110
                 </address>
                 <p>&copy; Copyright. All Right Reserved.</p>
                 </div>
            </footer>
        </>
    )
}