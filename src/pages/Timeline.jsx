import styles from "../styles/Timeline.module.scss";

export default function Timeline() {
  return (
    <section className={styles.timeline}>
      <h2>Parcours</h2>

      <div className={styles.textBlock}>
        <p>
          Développeur Web — Formation OpenClassrooms (2025)
        </p>

        <p>
          Formation diplômante orientée pratique, axée sur la réalisation de projets
          concrets proches de situations professionnelles.
        </p>

        <p>
          J’y ai acquis des bases solides en intégration responsive, JavaScript et React,
          tout en développant une méthode de travail rigoureuse.
        </p>

        <p>
          Cette expérience m’a permis de comprendre les enjeux réels d’un produit web :
          lisibilité du code, maintenabilité et expérience utilisateur.
        </p>
      </div>



    </section>
  );
}
