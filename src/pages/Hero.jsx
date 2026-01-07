import styles from "../styles/Hero.module.scss";

export default function Hero() {
  return (

    <section className={styles.hero}>
      <div className={styles.textBlock}>
        <h1>Développeur web junior</h1>

        <p>
          Je conçois des interfaces modernes, claires et responsives, avec une attention
          particulière portée à l’expérience utilisateur et à la qualité du code.
        </p>

        <p>
          À travers ce portfolio, je vous invite à découvrir mon parcours, mes projets
          et les compétences que j’ai développées lors de ma formation.
        </p>

        <p>
          Chaque projet présenté reflète ma progression, ma méthode de travail et
          mon envie de créer des solutions web fiables et bien pensées.
        </p>
      </div>

    </section>
  );
}
