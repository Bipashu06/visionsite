import './projects.css'
import { Link } from 'react-router-dom'
import working_on_it from './assets/working_on_it.jpg'
import { useEffect } from 'react'
export default function Projects(){
    function handler(){
        document.body.style.overflow = 'hidden';
    }
    useEffect(() => {
        window.addEventListener('scroll', handler);
        return () => {window.removeEventListener('scroll', handler);}
    })
    return(
        <div className="loading-text-container">
            <img src={working_on_it} alt="" />
            <h1>Working on it...</h1>
            <p>This Page is currently Under construction.
                <br />Please check back soon.
            </p>
            <Link to='/' id="back_home_btn" onClick={() => {
                document.body.style.overflow = 'scroll';  
            }}
            > Back To Home</Link>
        </div>
    )
}