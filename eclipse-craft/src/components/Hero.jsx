import '../stylesheets/Hero.css'
import hero from '../images/Hero_1280_300.png'
import logo from '../images/Logo_optima_font.png'


function Hero() {
    return(
        <>
            <section>
                <div className='shader'></div>
                <img className='hero' src={ hero } />
            </section>
            <img className='logo' src={ logo }/>
        </>
    )
}

export default Hero