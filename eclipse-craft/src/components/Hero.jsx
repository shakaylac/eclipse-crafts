import '../stylesheets/Hero.css'
import hero from '../images/Hero_1280_300.png'
import logo from '../images/Logo_optima_font.png'


function Hero() {
    return(
        <>
            <img class="hero" src={ hero } />
            <img className='logo' src={ logo }/>
        </>
    )
}

export default Hero