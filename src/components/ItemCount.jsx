import { useState } from "react";
import styles from "./ItemDetail.module.css"; 

const ItemCount = ({ stock = 10, onAdd }) => {

  const [cantidad, setCantidad] = useState(1);

  const incrementar = () => cantidad < stock && setCantidad(cantidad + 1);
  const decrementar = () => cantidad > 1 && setCantidad(cantidad - 1);

  return (
    <>
      <div className={styles.counterSection}>
        <span className={styles.label}>Cantidad de turnos</span>

        <div className={styles.counter}>
          <button
            onClick={decrementar}
            disabled={cantidad === 1}
            className={styles.counterBtn}
          >
            −
          </button>

          <span className={styles.counterValue}>{cantidad}</span>

          <button
            onClick={incrementar}
            disabled={cantidad === stock}
            className={styles.counterBtn}
          >
            +
          </button>
        </div>

        <p className={styles.counterHint}>
          Puedes agendar entre 1 y {stock} turnos
        </p>
      </div>

      <button
        onClick={() => onAdd(cantidad)}
        className={styles.btnAgendar}
      >
        Agendar {cantidad} {cantidad === 1 ? "turno" : "turnos"}
      </button>
    </>
  );
};

export default ItemCount;