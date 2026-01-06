import styles from "../styles/Accueil.module.scss";

export default function Accueil() {
  return (
    
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Bienvenue</h1>
        <p>
          Je suis développeur web, passionné par la création d’interfaces claires, modernes et performantes.
          À travers ce site, je vous invite à découvrir mon parcours, mes compétences et les projets que j’ai réalisés. 
          N’hésitez pas à parcourir les différentes sections pour en savoir plus sur mon travail et ma façon d’aborder le développement web.
        </p>
      </div>
    </section>
  );
}
