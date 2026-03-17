import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import styles from './TurnosView.module.css';

const TurnosView = () => {
  const { turnos, clearTurnos, removeTurno, totalTurnos } = useContext(CartContext);

  // Si no hay turnos, mostrar mensaje vacío
  if (turnos.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.empty}>
          <h1>📅 Mis Turnos</h1>
          <p className={styles.emptyMessage}>No tienes turnos agendados</p>
          <Link to="/" className={styles.btnPrimary}>
            Ver profesionales
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📅 Mis Turnos</h1>

      {/* Lista de turnos */}
      <div className={styles.turnosList}>
        {turnos.map((turno) => (
          <div key={turno.id} className={styles.turnoCard}>
            {/* Información del médico */}
            <div className={styles.medicoInfo}>
              <h3 className={styles.medicoNombre}>{turno.medico.nombre}</h3>
              <p className={styles.especialidad}>{turno.medico.especialidad}</p>
              <p className={styles.matricula}>Mat. N° {turno.medico.matricula}</p>
            </div>

            {/* Información del turno */}
            <div className={styles.turnoInfo}>
              <div className={styles.infoItem}>
                <span className={styles.label}>📅 Fecha:</span>
                <span className={styles.value}>
                  {new Date(turno.fecha + 'T00:00:00').toLocaleDateString('es-AR', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.label}>🕐 Horario:</span>
                <span className={styles.value}>{turno.horario}</span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.label}>🏥 Obra Social:</span>
                <span className={styles.value}>{turno.obraSocial}</span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.label}>📋 Cantidad:</span>
                <span className={styles.value}>{turno.cantidad}</span>
              </div>
            </div>

            {/* Botón eliminar */}
            <button
              className={styles.btnEliminar}
              onClick={() => removeTurno(turno.id)}
              aria-label="Eliminar turno"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Resumen */}
      <div className={styles.summary}>
        <p className={styles.totalTurnos}>
          Total de turnos agendados: <strong>{totalTurnos()}</strong>
        </p>
      </div>

      {/* Acciones */}
      <div className={styles.actions}>
        <button className={styles.btnDanger} onClick={clearTurnos}>
          Cancelar todos los turnos
        </button>
        <Link className={styles.btnSuccess} to="/confirmar-turnos">
          Confirmar turnos
        </Link>
      </div>
    </div>
  );
};

export default TurnosView;

