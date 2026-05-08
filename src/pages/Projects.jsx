import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Projects.module.scss';
import projectsData from '../data/projects.json';

export default function Projects() {
  const navigate    = useNavigate();
  const carouselRef = useRef(null);

  const scroll = (dir) => {
    const c = carouselRef.current;
    if (!c) return;
    const w = (c.firstChild?.offsetWidth ?? 300) + 16;
    const max = c.scrollWidth - c.clientWidth;
    if (dir === 'right') {
      c.scrollLeft >= max - 5 ? c.scrollTo({ left: 0, behavior: 'smooth' }) : c.scrollBy({ left: w, behavior: 'smooth' });
    } else {
      c.scrollLeft <= 5 ? c.scrollTo({ left: max, behavior: 'smooth' }) : c.scrollBy({ left: -w, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <div className={styles.topLeft}>
            <span className="chip-label">Projets</span>
            <h2 className="section-heading">Mes projets</h2>
            <p className={styles.subtitle}>
              Des projets concrets réalisés pendant ma formation et en autonomie.
            </p>
          </div>
        </div>

        <div className={styles.carouselWrapper}>
          <button className={`${styles.arrow} ${styles.left}`} onClick={() => scroll('left')} aria-label="Projet précédent">‹</button>

          <div className={styles.carousel} ref={carouselRef}>
            {projectsData.map((p) => (
              <div key={p.id} className={styles.card}>
                <div className={styles.cardImg}>
                  <img src={p.image} alt={`Aperçu ${p.title}`} />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    {p.stack?.map(t => <span key={t} className={styles.cardTag}>{t}</span>)}
                  </div>
                  <div className={styles.cardTitle}>{p.title}</div>
                  <div className={styles.cardDesc}>{p.context}</div>
                  <div className={styles.cardFooter}>
                    <button className={styles.cardBtn} onClick={() => navigate(`/projects/${p.slug}`)}>
                      Voir le projet →
                    </button>
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noreferrer" className={styles.cardRepo}>
                        <i className="ti ti-brand-github" style={{ fontSize: 14 }} aria-hidden="true" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className={`${styles.arrow} ${styles.right}`} onClick={() => scroll('right')} aria-label="Projet suivant">›</button>
        </div>
      </div>
    </section>
  );
}
