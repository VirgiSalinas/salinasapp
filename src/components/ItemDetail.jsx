import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import styles from './ItemDetail.module.css';
import ItemCount from './ItemCount';
import Swal from 'sweetalert2';

const ItemDetail = ({ medico }) => {
    // 🔄 Importar el contexto
    const [turn, setTurnos] = useState(false);
    const { addTurno } = useContext(CartContext);




    // Estados existentes

    const [cantidad, setCantidad] = useState(1);

    // Estados para selección de turno
    const [fechaSeleccionada, setFechaSeleccionada] = useState('');
    const [horarioSeleccionado, setHorarioSeleccionado] = useState('');
    const [obraSocialSeleccionada, setObraSocialSeleccionada] = useState('');

    // Horarios disponibles simulados
    const horariosDisponibles = ['09:00', '10:30', '12:00', '14:00', '15:30', '17:00'];


    // 🔄 Función actualizada con CartContext
    const handleAgregarTurno = () => {
        // Validar que todos los campos estén completos
        // CAMBIAR POR ALGUNA LIBRERIA DE ALERTAS
        if (!fechaSeleccionada) {
            alert('⚠️ Por favor selecciona una fecha');
            return;
        }

        if (!horarioSeleccionado) {
            alert('⚠️ Por favor selecciona un horario');
            return;
        }

        if (!obraSocialSeleccionada) {
            alert('⚠️ Por favor selecciona una obra social');
            return;
        }

        // Crear objeto turno
        const nuevoTurno = {
            id: `${medico.id}-${fechaSeleccionada}-${horarioSeleccionado}-${Date.now()}`,
            medico: medico,
            fecha: fechaSeleccionada,
            horario: horarioSeleccionado,
            obraSocial: obraSocialSeleccionada,
            cantidad: cantidad
        };

        // Agregar al contexto
        addTurno(nuevoTurno);

        setTurnos(true);

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Turno agregado`,
            showConfirmButton: false,
            timer: 1000
        })

        // Resetear formulario
        setFechaSeleccionada('');
        setHorarioSeleccionado('');
        setObraSocialSeleccionada('');
        setCantidad(1);
    };

    // Obtener fecha mínima (hoy)
    const today = new Date().toISOString().split('T')[0];

    return (
        <div className={styles.container}>
            {/* Volver */}
            <Link to="/" className={styles.backLink}>
                ← Volver al listado
            </Link>

            {/* Card Principal */}
            <div className={styles.card}>
                {/* Header */}
                <div className={styles.header}>
                    <h1 className={styles.nombre}>{medico.nombre}</h1>
                    <p className={styles.especialidad}>{medico.especialidad}</p>
                    <p className={styles.matricula}>Mat. N° {medico.matricula}</p>
                </div>

                {/* Divider */}
                <div className={styles.divider}></div>

                {/* Info Grid */}
                <div className={styles.infoGrid}>
                    {/* Modalidad */}
                    <div className={styles.infoItem}>
                        <span className={styles.label}>Modalidad</span>
                        <span className={styles.value}>{medico.modalidad}</span>
                    </div>

                    {/* Categoría */}
                    <div className={styles.infoItem}>
                        <span className={styles.label}>Especialidad</span>
                        <span className={styles.value}>{medico.category}</span>
                    </div>
                </div>

                {/* Obras Sociales Aceptadas (info) */}
                <div className={styles.obrasSociales}>
                    <span className={styles.label}>Obras Sociales Aceptadas</span>
                    <div className={styles.obrasGrid}>
                        {medico.obraSocial.map((obra, index) => (
                            <span key={index} className={styles.obraBadge}>
                                {obra}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className={styles.divider}></div>

                {/* SECCIÓN DE SELECCIÓN DE TURNO */}
                <div className={styles.turnoSection}>
                    <h3 className={styles.turnoTitle}>Selecciona tu turno</h3>

                    {/* Selector de Fecha */}
                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="fecha">
                            Fecha del turno
                        </label>
                        <input
                            id="fecha"
                            type="date"
                            min={today}
                            value={fechaSeleccionada}
                            onChange={(e) => setFechaSeleccionada(e.target.value)}
                            className={styles.dateInput}
                        />
                    </div>

                    {/* Selector de Horario */}
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Horario disponible</label>
                        <div className={styles.horariosGrid}>
                            {horariosDisponibles.map((horario) => (
                                <button
                                    key={horario}
                                    type="button"
                                    onClick={() => setHorarioSeleccionado(horario)}
                                    className={`${styles.horarioBtn} ${horarioSeleccionado === horario ? styles.horarioSelected : ''
                                        }`}
                                >
                                    {horario}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Selector de Obra Social */}
                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="obraSocial">
                            Tu obra social
                        </label>
                        <select
                            id="obraSocial"
                            value={obraSocialSeleccionada}
                            onChange={(e) => setObraSocialSeleccionada(e.target.value)}
                            className={styles.selectInput}
                        >
                            <option value="">Selecciona una obra social</option>
                            {medico.obraSocial.map((obra, index) => (
                                <option key={index} value={obra}>
                                    {obra}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Divider */}
                <div className={styles.divider}></div>
                {/*Contador */}
                {turn ? <Link className={styles.btnTurnos} to='/mis-turnos'>Turnos Agregados</Link> :
                    <ItemCount onAdd={handleAgregarTurno} stock={10} />
                }
            </div>
        </div>
    );
};

export default ItemDetail;

