import { Link } from "react-router-dom";
import styles from "./ItemList.module.css";

const ItemList = ({ medicos }) => {
  return (
    <div className={styles.wrapper}>
      {medicos.map((medico) => (
        <div key={medico.id} className={styles.card}>
          
          <div className={styles.header}>
            <h3 className={styles.name}>{medico.nombre}</h3>
            <p className={styles.specialty}>{medico.especialidad}</p>
          </div>

          <div className={styles.content}>
            <p className={styles.matricula}>
              Matrícula N° {medico.matricula}
            </p>

            <span
              className={`${styles.badge} ${
                medico.modalidad === "Presencial"
                  ? styles.presencial
                  : styles.virtual
              }`}
            >
              {medico.modalidad}
            </span>

            <p className={styles.sectionTitle}>
              Obras Sociales
            </p>

            <div className={styles.obras}>
              {medico.obraSocial.map((obra, index) => (
                <span key={index} className={styles.obraItem}>
                  {obra}
                </span>
              ))}
            </div>

            <Link
              to={`/item/${medico.id}`}
              className={styles.button}
            >
              Ver Disponibilidad
            </Link>
          </div>

        </div>
      ))}
    </div>
  );
};

export default ItemList;
