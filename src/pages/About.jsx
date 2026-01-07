import "../styles/global.scss";
import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <section className={`section ${styles.about}`}>
      <h2>À propos</h2>
      <div className={styles.textBlock}>
    <p>
      Je suis développeur web junior, formé au développement d’applications web
      modernes et orientées utilisateur. Issu d’une reconversion professionnelle,
      j’ai choisi le développement web pour son équilibre entre logique,
      créativité et résolution de problèmes.
    </p>

    <p>
      Aujourd’hui, je conçois des interfaces claires, responsives et maintenables,
      avec une affinité particulière pour le front-end et l’expérience utilisateur,
      tout en conservant une vision globale du projet web.
    </p>

    <p>
      Je souhaite rejoindre une équipe en tant que développeur web junior,
      idéalement sur des projets orientés front-end, afin de continuer à monter
      en compétences, consolider mes bases full-stack et contribuer à la création
      de solutions web utiles et bien conçues.
    </p>
  </div>
    </section>
  );
}
