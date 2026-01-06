import "../styles/global.scss";
import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <section className={`section ${styles.about}`}>
      <h2>À propos</h2>
      <p>
        Curieux et rigoureux, j’aime comprendre comment les choses fonctionnent et chercher des solutions propres et efficaces.

        Le développement web me permet d’allier logique, créativité et sens du détail.

        Même si je suis capable d’intervenir sur l’ensemble d’un projet web, je prends particulièrement plaisir à travailler sur le front-end, où l’expérience utilisateur et la qualité visuelle jouent un rôle central.
      </p>
    </section>
  );
}
