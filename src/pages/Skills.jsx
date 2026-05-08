import styles from '../styles/Skills.module.scss';
import skillsData from '../data/skills.json';

const logoMap = {
  'HTML':              '/logos/html.svg',
  'CSS / SCSS':        '/logos/scss.svg',
  'JavaScript':        '/logos/javascript.svg',
  'React':             '/logos/react.svg',
  'Node.js / Express': '/logos/node.js.svg',
  'Git / GitHub':      '/logos/github.svg',
  'TypeScript':        '/logos/typescript.svg',
  'Tailwind CSS':      '/logos/tailwind-css.svg',
  'MongoDB':           '/logos/mongodb.svg',
  'Vite':              '/logos/vite.svg',
};

const levelClass = {
  'Expert':        styles.expert,
  'Avancé':        styles.avance,
  'Intermédiaire': styles.intermediaire,
};

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.header}>
        <span className="chip-label">Compétences</span>
        <h2 className="section-heading">Ma stack technique</h2>
        <p className={styles.subtitle}>Les technologies que j'utilise au quotidien.</p>
      </div>

      <div className={styles.grid}>
        {skillsData.map(s => (
          <div key={s.id} className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.cardIcon}>
                {logoMap[s.name] && <img src={logoMap[s.name]} alt={s.name} />}
              </div>
              <span className={`${styles.cardLevel} ${levelClass[s.level] || styles.intermediaire}`}>
                {s.level}
              </span>
            </div>
            <div className={styles.cardName}>{s.name}</div>
            <div className={styles.cardDesc}>{s.desc || ''}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
