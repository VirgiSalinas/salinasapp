import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        
        <h1 className={styles.code}>404</h1>

        <svg
          className={styles.icon}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <h2 className={styles.title}>Página no encontrada</h2>

        <p className={styles.text}>
          Lo sentimos, la página que estás buscando no existe o fue movida.
          Verifica la URL o regresa al inicio.
        </p>

        <div className={styles.buttons}>
          <Link to="/" className={styles.primaryButton}>
            Ir al Inicio
          </Link>

          <button
            onClick={() => window.history.back()}
            className={styles.secondaryButton}
          >
            Volver Atrás
          </button>
        </div>

        
      </div>
    </div>
  );
};

export default NotFound;
