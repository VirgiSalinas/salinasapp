import { CiCalendarDate } from "react-icons/ci";
const CartWidget = ()=>{
    return(
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
             <CiCalendarDate fontSize={'1.5rem'} />
            <span>Mis turnos (1)</span>
        </div>
    )
}

export default CartWidget