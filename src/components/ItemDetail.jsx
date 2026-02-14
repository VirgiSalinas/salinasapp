import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ItemDetail.module.css';

const ItemDetail = ({ medico }) => {
    const [cantidad, setCantidad] = useState(1);

    const incrementar = () => cantidad < 10 && setCantidad(cantidad + 1);
    const decrementar = () => cantidad > 1 && setCantidad(cantidad - 1);

    const handleAgregarTurno = () => {
        alert(`✅ ${cantidad} turno(s) agendado(s) con ${medico.nombre}`);
    };

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
                     {/* Categoría */}
                    <div className={styles.infoItem}>
                        <span className={styles.label}>Especialidad</span>
                    </div>
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

                   
                </div>

                {/* Obras Sociales */}
                <div className={styles.obrasSociales}>
                    <span className={styles.label}>Obras Sociales</span>
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

                {/* Contador */}
                <div className={styles.counterSection}>
                    <span className={styles.label}>Cantidad de turnos</span>
                    
                    <div className={styles.counter}>
                        <button
                            onClick={decrementar}
                            disabled={cantidad === 1}
                            className={styles.counterBtn}
                            aria-label="Disminuir cantidad"
                        >
                            −
                        </button>

                        <span className={styles.counterValue}>{cantidad}</span>

                        <button
                            onClick={incrementar}
                            disabled={cantidad === 10}
                            className={styles.counterBtn}
                            aria-label="Aumentar cantidad"
                        >
                            +
                        </button>
                    </div>

                    <p className={styles.counterHint}>
                        Puedes agendar entre 1 y 10 turnos
                    </p>
                </div>

                {/* Botón de acción */}
                <button
                    onClick={handleAgregarTurno}
                    className={styles.btnAgendar}
                >
                    Agendar {cantidad} {cantidad === 1 ? 'turno' : 'turnos'}
                </button>
            </div>
        </div>
    );
};

export default ItemDetail;
