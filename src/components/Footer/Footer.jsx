import styles from '../../styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>© 2025 Noah Bernardi</span>
        <span>Fait avec React · SCSS · Vite</span>
      </div>
    </footer>
  );
}
