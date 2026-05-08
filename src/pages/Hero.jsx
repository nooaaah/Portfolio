import styles from '../styles/Hero.module.scss';

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className={styles.hero} id="accueil">
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.badge}>
            Disponible en alternance — septembre 2026
          </div>

          <h1 className={styles.title}>
            Développeur web<br />
            <span>full stack</span>,<br />
            disponible en alternance.
          </h1>

          <p className={styles.desc}>
            Passionné par l'UX et la qualité du code, je conçois des interfaces
            modernes, accessibles et maintenables.
          </p>

          <div className={styles.actions}>
            <button className={styles.btnPrimary} onClick={() => scrollTo('projects')}>
              Voir mes projets →
            </button>
            <button className={styles.btnSecondary} onClick={() => scrollTo('contact')}>
              Me contacter
            </button>
          </div>

          <div className={styles.stackRow}>
            <span className={styles.stackLabel}>Stack :</span>
            {['JavaScript', 'React', 'SCSS', 'Node.js', 'Express'].map(s => (
              <span key={s} className={styles.stackPill}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
