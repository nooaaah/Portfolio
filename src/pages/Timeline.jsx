import styles from '../styles/Timeline.module.scss';

const items = [
  {
    date: '2024',
    title: 'Premiers pas',
    desc: 'Auto-formation HTML, CSS, JavaScript via freeCodeCamp et Udemy. Découverte de la passion du développement web.',
    accent: false,
  },
  {
    date: '2025 – 2026',
    title: 'Formation OpenClassrooms',
    desc: 'Diplôme Développeur Web (RNCP niv. 5). Projets concrets : intégration, JavaScript, React, Node.js, MongoDB.',
    accent: true,
  },
  {
    date: '2026 →',
    title: 'Recherche d\'alternance',
    desc: 'Disponible à partir de septembre 2026. En recherche active d\'une alternance en développement web full stack.',
    accent: false,
  },
];

export default function Timeline() {
  return (
    <section id="parcours" className={styles.timeline}>
      <div className={styles.header}>
        <span className="chip-label">Parcours</span>
        <h2 className="section-heading">Mon chemin jusqu'ici</h2>
        <p className={styles.subtitle}>
          De la reconversion à la recherche d'alternance, une progression constante.
        </p>
      </div>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={i} className={item.accent ? styles.cardAccent : styles.card}>
            <div className={styles.cardNum}>0{i + 1}</div>
            <div className={styles.cardDate}>{item.date}</div>
            <div className={styles.cardTitle}>{item.title}</div>
            <div className={styles.cardDesc}>{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
