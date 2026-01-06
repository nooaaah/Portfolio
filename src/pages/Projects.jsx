import { useRef } from "react";
import styles from "../styles/Projects.module.scss";
import projectsData from "../data/projects.json";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();
  const carouselRef = useRef(null);

  const scroll = (direction) => {
  const carousel = carouselRef.current;
  if (!carousel) return;

  const cardWidth = carousel.firstChild.offsetWidth + 24; 
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;

  if (direction === "right") {
    if (carousel.scrollLeft >= maxScroll - 5) {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      carousel.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  } else {
    if (carousel.scrollLeft <= 5) {
      carousel.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else {
      carousel.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  }
};

  return (
    <section className={styles.projects}>
      <h2>Mes Projets</h2>

      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.arrow} ${styles.left}`}
          onClick={() => scroll("left")}
        >
          ‹
        </button>

        <div className={styles.carousel} ref={carouselRef}>
          {projectsData.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.cardInner}>
                <div className={styles.imageWrapper}>
                  <img src={project.image} alt={project.title} />
                </div>

                <div className={styles.cardContent}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <button
                    className={styles.viewButton}
                    onClick={() => navigate(`/projects/${project.slug}`)}
                  >
                    Voir le projet →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className={`${styles.arrow} ${styles.right}`}
          onClick={() => scroll("right")}
        >
          ›
        </button>
      </div>
    </section>
  );
}
