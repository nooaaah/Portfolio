import "../styles/global.scss";
import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <section className={`section ${styles.about}`}>
      <h2>À propos</h2>
      <p>
        Je suis développeur web junior, formé au développement d’applications web modernes et orientées utilisateur.
        Issu d’une reconversion professionnelle, j’ai choisi le développement web pour son équilibre entre logique, créativité et résolution de problèmes.

        Aujourd’hui, je conçois des interfaces claires, responsives et maintenables, avec une affinité particulière pour le front-end et l’expérience utilisateur, tout en gardant une vision globale du projet web.

        Je souhaite rejoindre une équipe en tant que développeur web junior, idéalement sur des projets orientés front-end, où je pourrais continuer à monter en compétences, consolider mes bases full-stack et participer activement à la création de solutions web utiles et bien conçues.
      </p>
    </section>
  );
}
