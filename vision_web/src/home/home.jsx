import NavBar from "./nav"
import MobileNav from "../MobileNav"
import Slider from "./imageslider"
import Welcome from './welcome'
import Facility from "./facilities"
import Deals from "./deals"
import Footer from "./footer"
import Clients from "./clients"
export default function Home(){
    return(
        <>
            <MobileNav />
            <NavBar/>
            <Slider/>
            <Welcome/>
            <Facility/>
            <Deals/>
            <Clients/>
            <Footer/>
        </>
    )
}