import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import {db} from '../service/firebase';
import { Link } from 'react-router-dom';
import styles from './Checkout.module.css';

const Checkout = () => {
  const [paciente, setPaciente] = useState({});
  const [validDni, setValidDni] = useState('');
  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { turnos, totalTurnos, clearTurnos } = useContext(CartContext);

  
  const pacienteData = (e) => {
    setPaciente({
      ...paciente,
      [e.target.name]: e.target.value
    });
  };

  const confirmarTurnos = (e) => {
    e.preventDefault();

    if (!paciente.nombre || !paciente.apellido || !paciente.direccion || !paciente.dni || !validDni) {
      setError('Por favor complete todos los campos');
    } else if (paciente.dni !== validDni) {
      setError('Los DNI no coinciden');
    } else {
      setError(null);
      setLoading(true);

      let orden = {
        paciente: paciente,
        turnos: turnos,
        totalTurnos: totalTurnos(),
        fecha: serverTimestamp()
      };

      const orderColl = collection(db, 'orders');

      addDoc(orderColl, orden)
        .then((res) => {
          setOrderId(res.id);
          clearTurnos();
        })
        .catch((error) => {
          console.log('Error al crear la orden:', error);
          setError('Hubo un error al procesar tu solicitud. Intenta nuevamente.');
        })
        .finally(() => setLoading(false));
    }
  };

  if (!turnos.length && !orderId) {
    return (
      <div className={styles.container}>
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>📅</div>
          <h1 className={styles.emptyTitle}>No hay turnos para confirmar</h1>
          <p className={styles.emptyMessage}>
            Primero debes agendar al menos un turno
          </p>
          <Link to="/" className={styles.btnPrimary}>
            Ver profesionales
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {orderId ? (
        <div className={styles.success}>
          <div className={styles.successIcon}>✅</div>
          <h1 className={styles.successTitle}>¡Turnos confirmados exitosamente!</h1>
          <p className={styles.successMessage}>
            Tus turnos han sido agendados correctamente
          </p>
          <div className={styles.orderId}>
            <span className={styles.orderLabel}>Número de orden:</span>
            <span className={styles.orderNumber}>{orderId}</span>
          </div>
          <p className={styles.successNote}>
            Guarda este número de orden para futuras consultas
          </p>
          <Link to="/" className={styles.btnPrimary}>
            Volver al inicio
          </Link>
        </div>
      ) : (
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Completa tus datos</h1>
          <p className={styles.subtitle}>
            Necesitamos tus datos para confirmar los turnos
          </p>

          {error && (
            <div className={styles.errorAlert}>
              ⚠️ {error}
            </div>
          )}

          <form className={styles.form} onSubmit={confirmarTurnos}>
            <div className={styles.formGroup}>
              <label htmlFor="nombre" className={styles.label}>
                Nombre *
              </label>
              <input
                id="nombre"
                name="nombre"
                placeholder="Ingrese su nombre"
                className={styles.input}
                type="text"
                onChange={pacienteData}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="apellido" className={styles.label}>
                Apellido *
              </label>
              <input
                id="apellido"
                name="apellido"
                placeholder="Ingrese su apellido"
                className={styles.input}
                type="text"
                onChange={pacienteData}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="direccion" className={styles.label}>
                Dirección *
              </label>
              <input
                id="direccion"
                name="direccion"
                placeholder="Ingrese su dirección"
                className={styles.input}
                type="text"
                onChange={pacienteData}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="dni" className={styles.label}>
                DNI *
              </label>
              <input
                id="dni"
                name="dni"
                placeholder="Ingrese su DNI"
                className={styles.input}
                type="text"
                onChange={pacienteData}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="confirmDni" className={styles.label}>
                Confirmar DNI *
              </label>
              <input
                id="confirmDni"
                name="confirmDni"
                placeholder="Repita su DNI"
                className={styles.input}
                type="text"
                onChange={(e) => setValidDni(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className={styles.btnSubmit}
              disabled={loading}
            >
              {loading ? 'Procesando...' : `Confirmar ${totalTurnos()} ${totalTurnos() === 1 ? 'turno' : 'turnos'}`}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;