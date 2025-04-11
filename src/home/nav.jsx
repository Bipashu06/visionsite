import './nav.css';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAtom, faUser, faPhone, faWrench, faBox, faBars, faBullseye} from '@fortawesome/free-solid-svg-icons';


export default function NavBar(){
    const [width, setWidth] = useState(window.innerWidth);
    const [displayBars, setDisplayBars] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    function close(){
        if(window.scrollY > 300)
            document.querySelector('.mobile_ul').classList.remove('visible');
    }
    useEffect(() => {
        window.onscroll = () => {
            close();
        }
     })
    function showNav(){
        if(!isNavOpen){
            document.querySelector('.mobile_ul').classList.add('visible');
            window.scrollTo(0, 0);
        }
        else{
            document.querySelector('.mobile_ul').classList.remove('visible');
            window.scrollTo(0, 0);
        }
        setIsNavOpen(!isNavOpen);
    }
    const changeText = () => {
        setWidth(window.innerWidth);
        if(width < 901){
           setDisplayBars(true);
        }
        else{
            setDisplayBars(false);
        } 
    }
    useEffect(() => {
        changeText();
        window.addEventListener('resize', changeText);
        return() => {
            window.removeEventListener('resize', changeText);
        }
    }, [width]);

   
    return(
        <>
        <nav>
            <div className="company_icon">
               <Link to ='/'><img src={Logo} alt="" /></Link> 
               <h2 id='company_icon_head'>Automation & Technologies</h2>
            </div>
            <div className="midNav">
                <Link to="/" className="navlinks"><FontAwesomeIcon icon={ faHome } /> Home</Link>
                <Link to="/about" className="navlinks"><FontAwesomeIcon icon={ faUser } /> About Us</Link>
                <Link to="/products" className="navlinks"><FontAwesomeIcon icon={ faBox } /> Our Products</Link>
                <Link to="/services" className="navlinks"><FontAwesomeIcon icon={ faAtom } /> Our Services</Link>
                <Link to="/projects" className="navlinks"><FontAwesomeIcon icon={ faWrench } /> Projects</Link>
                <Link to="/career" className="navlinks"><FontAwesomeIcon icon={ faBullseye } /> Career</Link>
                <Link to="/contact" className="navlinks"><FontAwesomeIcon icon={ faPhone } /> Contact Us</Link>
            </div>
            { displayBars && (<FontAwesomeIcon icon = {faBars} id='bars' onClick={showNav}/>)}
           
        </nav>
         {( <ul className='mobile_ul'>
            <Link to="/" className="navlinks"><FontAwesomeIcon icon={ faHome } /> Home</Link>
            <Link to="/about" className="navlinks"><FontAwesomeIcon icon={ faUser } /> About Us</Link>
            <Link to="/products" className="navlinks"><FontAwesomeIcon icon={ faBox } /> Our Products</Link>
            <Link to="/services" className="navlinks"><FontAwesomeIcon icon={ faAtom } /> Our Services</Link>
            <Link to="/projects" className="navlinks"><FontAwesomeIcon icon={ faWrench } /> Projects</Link>
            <Link to="/career" className="navlinks"><FontAwesomeIcon icon={ faBullseye } /> Career</Link>
            <Link to="/contact" className="navlinks"><FontAwesomeIcon icon={ faPhone } /> Contact Us</Link>
        </ul>)}
        </>
    )
}