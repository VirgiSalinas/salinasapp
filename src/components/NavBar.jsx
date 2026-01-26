//import css
import '../assets/css/NavBar.css'
import CartWidget from './CartWidget'


const NavBar = ()=> {
    return (
        <nav className="nav-container">
            <div className='logo-item'>
                <img src="./img/logoSalud.png" alt="logo TuSalud" />
                <h2>TuSalud</h2>
            </div>
            <CartWidget/>
           
        </nav>
    )
}

export default NavBar