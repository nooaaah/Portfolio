import styles from '../styles/About.module.scss';

const features = [
  { icon: '⚛️', title: 'React avancé',   desc: 'Hooks, context, routing, React Query.' },
  { icon: '🎨', title: 'UI/UX focus',    desc: 'Interfaces soignées et accessibles.' },
  { icon: '📱', title: 'Responsive',     desc: 'Mobile-first, compatible tous écrans.' },
  { icon: '⚡', title: 'Code propre',    desc: 'Maintenable, lisible, bien structuré.' },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className="chip-label">À propos</span>
          <p className={styles.tagline}>
            La logique<br />
            au service<br />
            de <em>l'interface.</em>
          </p>
          <div className={styles.body}>
            <p>
              Développeur web junior issu d'une reconversion professionnelle,
              j'ai choisi le développement web pour son équilibre unique entre
              logique, créativité et résolution de problèmes concrets.
            </p>
            <p>
              Aujourd'hui, je conçois des interfaces claires et maintenables
              avec une vraie affinité pour le full stack et l'expérience utilisateur.
              Je cherche une alternance pour continuer à progresser au sein d'une équipe.
            </p>
          </div>
          <button className={styles.link} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Me contacter →
          </button>
        </div>

        <div className={styles.right}>
          {features.map(f => (
            <div key={f.title} className={styles.featureCard}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <div className={styles.featureTitle}>{f.title}</div>
              <div className={styles.featureDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
