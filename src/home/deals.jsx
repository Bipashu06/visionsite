import './deals.css'
import { useState, useEffect } from 'react'
import autonics from '../assets/partners/autonics.png'
import banner from '../assets/partners/banner.png'
import epson from '../assets/partners/epson.png'
import fuji from '../assets/partners/fuji.png'
import mitsibushi from '../assets/partners/mitsibushi.png'
import omron from '../assets/partners/omron.png'
import panasonic from '../assets/partners/panasonic.png'
import proface from '../assets/partners/proface.png'
import siemens from '../assets/partners/siemens.png'
export default function Deals(){
    const companies = [autonics, banner, epson, fuji, 
        mitsibushi, omron, panasonic, proface, siemens
    ]
    const [index, setIndex] = useState(0);
    const [displaySlider, setDisplaySlider] = useState(false);
    function resizeHandler(){
        if(window.innerWidth <= 541){
            setDisplaySlider(true)
        }
    }
    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 2) % companies.length);
        }, 3000); 

        return () => {clearInterval(interval)
            window.removeEventListener('resize', resizeHandler);
        };
    }, [companies.length]);
    return(
        <>
            <div className="companies_container">
            <h1 className='heading'>Deals With</h1>
            <div className="companies_img_container">
                <img src={autonics} alt="" />
                <img src={banner} alt="" />
                <img src={epson} alt="" />
                <img src={fuji} alt="" />
                <img src={mitsibushi} alt="" />
                <img src={omron} alt="" />
                <img src={panasonic} alt="" />
                <img src={proface} alt="" />
                <img src={siemens} alt="" />
            </div>
            </div>
        </>    
    )
}