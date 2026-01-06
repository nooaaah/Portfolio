import styles from "../styles/Accueil.module.scss";

export default function Accueil() {
  return (
    
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Développeur web junior</h1>
        <p>
          Développeur web junior, je conçois des interfaces modernes, claires et responsives, avec une attention particulière portée à l’expérience utilisateur et à la qualité du code.

          À travers ce portfolio, je vous invite à découvrir mon parcours, mes projets et les compétences que j’ai développées lors de ma formation et de mes réalisations récentes.
          Chaque projet présenté reflète ma progression, ma méthode de travail et mon envie de créer des solutions web fiables et bien pensées.
        </p>
      </div>
    </section>
  );
}
