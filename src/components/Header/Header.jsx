import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const goToSection = (id) => {
    setMenuOpen(false);

    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <span className={styles.logo}>Bernardi Noah</span>

        
        <div className={styles.links}>
          <button onClick={() => goToSection("accueil")}>Accueil</button>
          <button onClick={() => goToSection("about")}>À propos</button>
          <button onClick={() => goToSection("parcours")}>Parcours</button>
          <button onClick={() => goToSection("projects")}>Projets</button>
          <button onClick={() => goToSection("skills")}>Compétences</button>
          <button onClick={() => goToSection("contact")}>Contact</button>
        </div>

        
        <button
          className={styles.burger}
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button onClick={() => goToSection("accueil")}>Accueil</button>
          <button onClick={() => goToSection("about")}>À propos</button>
          <button onClick={() => goToSection("parcours")}>Parcours</button>
          <button onClick={() => goToSection("projects")}>Projets</button>
          <button onClick={() => goToSection("skills")}>Compétences</button>
          <button onClick={() => goToSection("contact")}>Contact</button>
        </div>
      )}
    </header>
  );
}
