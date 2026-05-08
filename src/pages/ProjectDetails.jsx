import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects.json";
import styles from "../styles/ProjectDetails.module.scss";

export default function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug);
  if (!project) return <p>Projet introuvable</p>;

  const goBackToProjects = () => {
    navigate("/");
    setTimeout(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <main className={styles.projectPage}>
      
      <div className={styles.topBar}>
        <button className={styles.back} onClick={goBackToProjects}>
          ← Tous les projets
        </button>
      </div>

      
      {project.image && (
        <div className={styles.hero}>
          <img
            src={project.image}
            alt={`Aperçu du projet ${project.title}`}
          />
        </div>
      )}

       
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>{project.title}</h1>
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.repoButton}
          >
            <img src="/logos/github.svg" alt="GitHub" className={styles.repoIcon} />
            Voir le code
          </a>
        )}
      </div>

      
      <section>
        <h2>Contexte</h2>
        <p>{project.context}</p>
      </section>

      <section>
        <h2>Objectifs</h2>
        <p>{project.objectives}</p>
      </section>

      <section>
  <h2>Stack technique</h2>

  <div className={styles.techLogos}>
    
    {project.stack.map((tech) => (
      <img
        key={tech}
        src={`/logos/${tech.toLowerCase().replace(/ /g, "-")}.svg`}
        alt={tech}
        className={styles.techLogo}
      />
    ))}
  </div>
      </section>

      <section>
        <h2>Compétences développées</h2>
        <p>{project.skills}</p>
      </section>

      <section>
        <h2>Résultats</h2>
        <p>{project.results}</p>
      </section>

      <section>
        <h2>Axes d’amélioration</h2>
        <p>{project.improvements}</p>
      </section>
    </main>
  );
}
