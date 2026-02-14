import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuCategories = [
    {
      id: "salud-general",
      title: "Salud General",
      specialties: [
        { id: "clinico", name: "Clínico" },
        { id: "traumatologia", name: "Traumatología" },
        { id: "pediatria", name: "Pediatría" },
      ],
    },
    {
      id: "salud-mental",
      title: "Salud Mental",
      specialties: [
        { id: "psicologia", name: "Psicología" },
        { id: "psiquiatria", name: "Psiquiatría" },
      ],
    },
    {
      id: "estudios",
      title: "Estudios",
      specialties: [
        { id: "radiologia", name: "Radiografía" },
        { id: "extraccion", name: "Extracción de Sangre" },
      ],
    },
    {
      id: "tratamiento",
      title: "Tratamiento",
      specialties: [
        { id: "kinesiologia", name: "Kinesiología" },
        { id: "odontologia", name: "Odontología" },
        { id: "dermatologia", name: "Dermatología" },
        { id: "oncologia", name: "Oncología" },
      ],
    },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <img src="/img/logoSalud.png" alt="MediTurnos" />
          <span>MediTurnos</span>
        </Link>

        <div className={styles.menu}>
          {menuCategories.map((category) => (
            <div
              key={category.id}
              className={styles.menuItem}
              onMouseEnter={() => setOpenDropdown(category.id)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={styles.menuButton}>
                {category.title}
              </button>

              {openDropdown === category.id && (
                <div className={styles.dropdown}>
                  {category.specialties.map((specialty) => (
                    <Link
                      key={specialty.id}
                      to={`/category/${specialty.id}`}
                      className={styles.dropdownItem}
                      onClick={() => setOpenDropdown(null)}
                    >
                      {specialty.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
