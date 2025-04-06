import '../stylesheets/Header.css'
import logo from '../images/Logo_optima_font.png'

function Header() {
  return(
    <div class="container">
      <header>
        <img class='logo' src={logo} alt='logo'/>
        <ul>
            <li>About</li>
            <li>Cart</li>
        </ul>
    </header>
   </div>

  )
}

export default Header