import { createContext, useState } from "react";

// 1️⃣ DEFINIR EL CONTEXTO
export const CartContext = createContext();

// 2️⃣ DECLARAR EL PROVEEDOR
export const CartProvider = ({ children }) => {
    const [turnos, setTurnos] = useState([]);

    // 📌 FUNCIONES DEL CONTEXTO

    
    const addTurno = (turno) => {
       
        const turnoExiste = turnos.some(
            (t) =>
                t.medico.id === turno.medico.id &&
                t.fecha === turno.fecha &&
                t.horario === turno.horario &&
                t.obraSocial === turno.obraSocial
        );

        if (turnoExiste) {
          
            setTurnos(
                turnos.map((t) => {
                    if (
                        t.medico.id === turno.medico.id &&
                        t.fecha === turno.fecha &&
                        t.horario === turno.horario &&
                        t.obraSocial === turno.obraSocial
                    ) {
                        
                        return { ...t, cantidad: t.cantidad + turno.cantidad };
                    } else {
                        
                        return t;
                    }
                })
            );
        } else {
           
            setTurnos([...turnos, turno]);
        }
    };

    
    const removeTurno = (turnoId) => {
        setTurnos(turnos.filter((turno) => turno.id !== turnoId));
    };

    
    const clearTurnos = () => {
        setTurnos([]);
    };


    
    const turnoExists = (turnoId) => {
        return turnos.some((turno) => turno.id === turnoId);
    };


    

    const totalTurnos = () => {
        return turnos.reduce((acc, turno) => acc + turno.cantidad, 0);
    };

    return (
        <CartContext.Provider
            value={{
                turnos,
                addTurno,
                removeTurno,
                clearTurnos,
                turnoExists,
                totalTurnos,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

