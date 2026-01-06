import styles from "../styles/Skills.module.scss";
import skills from "../data/skills.json";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Compétences</h2>

      <div className={styles.grid}>
        {skills.map((skill) => (
          <div key={skill.id} className={styles.card}>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
