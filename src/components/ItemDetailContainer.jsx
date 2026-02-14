import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMedicoById } from '../mock/asyncMock';
import ItemDetail from '../components/ItemDetail';
import styles from './ItemDetailContainer.module.css';

const ItemDetailContainer = () => {
  const [medico, setMedico] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    getMedicoById(id)
      .then((data) => {
        setMedico(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar médico:', error);
        setLoading(false);
      });

  }, [id]);
  
  // ESTADO DE CARGA
  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingContent}>
          <div className={styles.spinner}></div>
          <p className={styles.loadingText}>Cargando información del profesional...</p>
        </div>
      </div>
    );
  }

  // MÉDICO NO ENCONTRADO
  if (!medico) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorContent}>
          <div className={styles.errorIcon}>🔍</div>
          <h2 className={styles.errorTitle}>Profesional no encontrado</h2>
          <p className={styles.errorMessage}>
            El médico que buscas no existe o fue eliminado
          </p>
          <a href="/" className={styles.btnVolver}>
            Volver al inicio
          </a>
        </div>
      </div>
    );
  }

  // RENDERIZADO NORMAL
  return <ItemDetail medico={medico} />;
};

export default ItemDetailContainer;