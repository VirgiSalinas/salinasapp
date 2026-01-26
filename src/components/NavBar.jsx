//import css
import '../assets/css/NavBar.css'
import CartWidget from './CartWidget'

const NavBar = ()=> {
    return (
        <nav className="nav-container">
            <a href=""> CoderShop</a>
            <a href="">Turnos</a>
            <CartWidget/>
        </nav>
    )
}

export default NavBar