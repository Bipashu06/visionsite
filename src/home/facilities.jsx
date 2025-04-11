import './facilities.css'
import training from '../assets/training.jpg'
import automation from '../assets/automation.jpg'
import services from '../assets/services.jpg'
export default function Facility(){
    return(
        <>
            <div className="card_container">
                <div className="card">
                    <img src={training} alt="" />
                    <h2>Training Programes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Molestiae illo, tenetur quas consectetur amet tempore 
                         similique distinctio voluptas tempora! Velit?</p>
                </div>
                <div className="card">
                    <img src={automation} alt="" />
                    <h2>Automations</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Molestiae illo, tenetur quas consectetur amet tempore 
                         similique distinctio voluptas tempora! Velit?</p>
                </div>
                <div className="card">
                    <img src={services} alt="" />
                    <h2>Services</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Molestiae illo, tenetur quas consectetur amet tempore 
                         similique distinctio voluptas tempora! Velit?</p>
                </div>
            </div>
        </>
    )
}