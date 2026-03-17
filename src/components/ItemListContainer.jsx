import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { getMedicos, getMedicosByCategory } from "../mock/asyncMock";
import ItemList from "../components/ItemList";
import styles from "./ItemListContainer.module.css";
import { addDoc, collection, collectionGroup, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";
//import { medicos as medicosMock} from "../mock/asyncMock";

const ItemListContainer = () => {
  const [medicos, setMedicos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    //conectar a nuestra coleccion
    const medicosCollection = categoryId
    ? query(
      collection(db, "medicos"),
      where("category", "==", categoryId)
    )
    : collection(db, "medicos");
    //pedir docs
    getDocs(medicosCollection)
    .then((res)=>{
      const list = res.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setMedicos(list);
    })

    .catch((error) => {
      console.error("Error al traer medicos", error);
    })
    .finally(()=>{
      setLoading(false);
    });

    //const fetchPromise = categoryId
    //  ? getMedicosByCategory(categoryId)
    //  : getMedicos();
//
   // fetchPromise
    //  .then((data) => {
    //    setMedicos(data);
    //    setLoading(false);
    //  })
   //   .catch((error) => {
   //     console.error("Error al cargar médicos:", error);
   //     setLoading(false);
   //   });
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


  //subir los datos
  //const subirDataAFirebase = async ()=>{
  //  try {
  //    const medicosCollection = collection(db,"medicos");
  //    const promises = medicosMock.map((medico) => 
 //       addDoc(medicosCollection, medico)
 //   );
//
 //     await Promise.all(promises);
 //     console.log("Datos subidos correctamente");
 //   } catch(error){
 //     console.error("Error al subir data;", error);
 //   }
//    
 // };


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

