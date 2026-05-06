import styles from "./HeroSection.module.css";

const HeroSection = () => {

  const handleScroll = () => {
    const section = document.getElementById("medicos-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Bienvenido a MediTurnos
        </h1>

        <p className={styles.subtitle}>
          Sacá tu próximo turno de forma fácil y rápida
        </p>

        <button onClick={handleScroll} className={styles.button}>
          Ver Médicos
        </button>
      </div>
    </section>
  );
};

export default HeroSection;