import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { CiCalendarDate } from "react-icons/ci";


const CartWidget = () => {
    
    const { totalTurnos } = useContext(CartContext);

    return (
        <Link 
            to="/mis-turnos" 
            style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "8px",
                textDecoration: "none",
                color: "inherit",
                transition: "opacity 0.2s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = "0.7"}
            onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
        >
            <CiCalendarDate fontSize={'1.5rem'} />
            <span>Mis turnos ({totalTurnos()})</span>
        </Link>
    );
};

export default CartWidget;

