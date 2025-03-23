import './MobileNav.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAtom, faUser, faPhone, faWrench, faBox, faBars, faBullseye} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
export default function MobileNav(){
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
    return(
        <>
        {/* <nav id='mobile_nav'>
            <h2 id='mobile_header'>Vision Automation</h2>
            <FontAwesomeIcon icon = {faBars} id='bars' onClick={showNav}/>
        </nav>
        <ul className='mobile_ul'>
        <Link to="/" className="navlinks"><FontAwesomeIcon icon={ faHome } /> Home</Link>
        <Link to="/about" className="navlinks"><FontAwesomeIcon icon={ faUser } /> About Us</Link>
        <Link to="/products" className="navlinks"><FontAwesomeIcon icon={ faBox } /> Our Products</Link>
        <Link to="/services" className="navlinks"><FontAwesomeIcon icon={ faAtom } /> Our Services</Link>
        <Link to="/projects" className="navlinks"><FontAwesomeIcon icon={ faWrench } /> Projects</Link>
        <Link to="/career" className="navlinks"><FontAwesomeIcon icon={ faBullseye } /> Career</Link>
        <Link to="/contact" className="navlinks"><FontAwesomeIcon icon={ faPhone } /> Contact Us</Link>
        </ul> */}
        </>
    )
}