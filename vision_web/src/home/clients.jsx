import './clients.css'
import first from '../assets/clients/aal.png'
import second from '../assets/clients/ashok.png'
import third from '../assets/clients/bajaj.png'
import fourth from '../assets/clients/centurply.png'
import fifth from '../assets/clients/britania.png'
import sixth from '../assets/clients/earindia.png'
import seventh from '../assets/clients/jcb.png'
import eight from '../assets/clients/lumax.png'
import nine from '../assets/clients/mnf.jpg'
import ten from '../assets/clients/vadilal.png'
export default function Clients(){
    const position = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const width = 130;
    const height = 60;
    return(
        <>  
            <div className="clients_slider" style={{'--width': `${width}`, '--height': `${height}`, '--quantity': `10`}}>
            <h2 className="heading" style={{paddingBottom: '50px'}}>Our Clients</h2>

                <div className="clients_img_container">
                    <div className="items" style={{'--position': `${position[1]}`}}><img src={first} alt="" /></div>
                    <div className="items" style={{'--position': `${position[2]}`}}><img src={second} alt="" /></div>
                    <div className="items" style={{'--position': `${position[3]}`}}><img src={third} alt="" /></div>
                    <div className="items" style={{'--position': `${position[4]}`}}><img src={fourth} alt="" /></div>
                    <div className="items" style={{'--position': `${position[5]}`}}><img src={fifth} alt="" /></div>
                    <div className="items" style={{'--position': `${position[6]}`}}><img src={sixth} alt="" /></div>
                    <div className="items" style={{'--position': `${position[7]}`}}><img src={seventh} alt="" /></div>
                    <div className="items" style={{'--position': `${position[8]}`}}><img src={eight} alt="" /></div>
                    <div className="items" style={{'--position': `${position[9]}`}}><img src={nine} alt="" /></div>
                    <div className="items" style={{'--position': `${position[10]}`}}><img src={ten} alt="" /></div>
                </div>
            </div>
        </>    
    )
}