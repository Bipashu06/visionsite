import './products.css'
import NavBar from "./home/nav"
import Footer from "./home/footer"
import sensors from './assets/products/pnumatic_sensor.jpg'
import plc from './assets/products/plc.jpg'
import scada from './assets/products/scada.jpg'
import servodrivers from './assets/products/servodrives.jpg'
import vfd from './assets/products/vfd.jpg'
import hmi from './assets/products/hmi.webp'
import iot from './assets/products/iot.png'
import accesories from './assets/products/accesories.jpg'
import scanners from './assets/products/scanners.jpg'
import pc from './assets/products/pc.jpg'
import switchgear from './assets/products/switchgear.jpg'
import pannels from './assets/products/pannels.jpg'
import controllers from './assets/products/controllers.jpg'
import instruments from './assets/products/instruments.jpg'
import motors from './assets/products/motors.jpg'
export default function Products(){
    const products_images = [sensors, plc, scada, servodrivers, vfd, 
        hmi, iot, accesories, scanners, pc, switchgear, pannels
       , controllers, instruments, motors];
    const products_name = ["Sensors", "Plc", "Scada", "Servo Drives",
         "VFD", "HMI", "IOT", "Accesories", "Scanners", "Industrial Pc's"
        , "Switch Gears", "Pannels", "Controllers", "Instruments", "Motors"];
    return(
    <>
      
        <NavBar/>
        <br />
        <div className="heading_h2">Products</div>
        <div className="products_container">
            {
                products_images.map((image, index) => {
                    return(
                    <div className="product">
                        <img src={image} alt={index+1} key={index}/>
                        <h2>{products_name[index]}</h2>
                    {/* <p>A pneumatic sensor detects pressure changes in automation systems,
                         converting them into signals for precise control. It enhances 
                         efficiency and safety, making it ideal for industries like 
                         manufacturing and robotics.</p> */}
                        </div>
                    )
                })
            }
        </div>
        <Footer/>
    
    </>
    )
}