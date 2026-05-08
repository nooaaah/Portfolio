import styles from '../styles/Contact.module.scss';

const links = [
  { label: 'Email',    value: 'noah.bernardi12@gmail.com',                        href: 'mailto:noah.bernardi12@gmail.com',                          icon: 'ti-mail'        },
  { label: 'LinkedIn', value: 'linkedin.com/in/noah-bernardi',                     href: 'https://www.linkedin.com/in/noah-bernardi-8a7068241/',       icon: 'ti-brand-linkedin' },
  { label: 'GitHub',   value: 'github.com/nooaaah',                               href: 'https://github.com/nooaaah',                                icon: 'ti-brand-github' },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.chipLight}>Contact</span>
          <h2 className={styles.title}>
            Travaillons<br /><span>ensemble.</span>
          </h2>
          <p className={styles.subtitle}>
            Disponible en alternance à partir de septembre 2026.
            N'hésitez pas à me contacter, je réponds rapidement.
          </p>
        </div>

        <div className={styles.cards}>
          {links.map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className={styles.card}>
              <div className={styles.cardIcon}>
                <i className={`ti ${l.icon}`} aria-hidden="true" />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardLabel}>{l.label}</div>
                <div className={styles.cardValue}>{l.value}</div>
              </div>
              <i className={`ti ti-arrow-right ${styles.cardArrow}`} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
