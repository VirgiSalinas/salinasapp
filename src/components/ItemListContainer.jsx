import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMedicos, getMedicosByCategory } from "../mock/asyncMock";
import ItemList from "../components/ItemList";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = () => {
  const [medicos, setMedicos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchPromise = categoryId
      ? getMedicosByCategory(categoryId)
      : getMedicos();

    fetchPromise
      .then((data) => {
        setMedicos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar médicos:", error);
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <div className={styles.centered}>
        <div>
          <div className={styles.spinner}></div>
          <p className={styles.loadingText}>Cargando médicos...</p>
        </div>
      </div>
    );
  }

  if (medicos.length === 0) {
    return (
      <div className={styles.centered}>
        <div>
          <p className={styles.emptyTitle}>
            No se encontraron médicos
          </p>
          <p className={styles.emptyText}>
            {categoryId
              ? `No hay profesionales disponibles en la categoría "${categoryId}"`
              : "No hay profesionales disponibles"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            {categoryId
              ? `Especialidad: ${
                  categoryId.charAt(0).toUpperCase() +
                  categoryId.slice(1)
                }`
              : "Todos los Profesionales"}
          </h1>

          <p className={styles.subtitle}>
            {medicos.length} profesional
            {medicos.length !== 1 ? "es" : ""} disponible
            {medicos.length !== 1 ? "s" : ""}
          </p>
        </div>

        <ItemList medicos={medicos} />
      </div>
    </div>
  );
};

export default ItemListContainer;

