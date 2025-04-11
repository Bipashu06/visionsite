import './services.css'
import NavBar from "./home/nav"
import Footer from "./home/footer"
import text from './text'
import machine_vision from './assets/services/machine_vision.jpg'
import scada from './assets/services/scada.jpg'
import plchmi from './assets/services/plchmi.jpg'
import drives from './assets/services/drives.jpg'
import ems from './assets/services/ems.jpg'
import spm from './assets/services/spm.jpg'
import conveyers from './assets/services/conveyers.jpg'
import iot from './assets/services/iot.webp'
import softwere from './assets/services/industrial_softwere.png'
import repairing from './assets/services/repairing.jpg'
import barcode from './assets/services/barcode_read.jpg'
import wireless_system from './assets/services/wireless_system.jpg'
import pannels from './assets/services/pannels.jpg'
import robots from './assets/services/robots.jpg'
import cmc from './assets/services/cmc.png'

export default function Services(){
    const services_images = [plchmi, scada, drives, 
        ems, machine_vision, spm, conveyers, iot, softwere, repairing, barcode, 
        wireless_system, pannels, robots, cmc
    ];
    const service_names = ["PLC & HMI", "Scada System", "Drives",
        "Energy Managment System", "Machine Vision", "SPM Machines", "Conveyers", 
        "IOT", "Industrial Softwere", "Reparing", "Barcode & RFID System", 
        "Wireless Communication System", "Control Pannels",
         "Industrial Robotics", "CNC, VMC & HMC"
    ];
    return(
        <>
        <NavBar/>
        <br />
        <div className="heading_h2">Services And Provisions</div>
            <div className="services_container">
                {services_images.map((image, index) => {
                    return(
                    <div className="service">
                    <img src={image} alt={index+1} key={index+1}/>
                    <p> <h2>{service_names[index]}</h2>{text[index]}</p>
                </div>
                    )
                })}
            </div>
        <Footer/>

        </>
    )
}