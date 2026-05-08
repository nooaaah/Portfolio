import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../../styles/Header.module.scss';

const links = [
  { label: 'Accueil',      id: 'accueil' },
  { label: 'À propos',     id: 'about' },
  { label: 'Parcours',     id: 'parcours' },
  { label: 'Projets',      id: 'projects' },
  { label: 'Compétences',  id: 'skills' },
];

export default function Header() {
  const location = useLocation();
  const navigate  = useNavigate();
  const [open, setOpen]       = useState(false);
  const [active, setActive]   = useState('accueil');

  useEffect(() => {
    const handler = () => {
      const sections = links.map(l => document.getElementById(l.id)).filter(Boolean);
      const scrollY  = window.scrollY + 80;
      let current = 'accueil';
      for (const el of sections) {
        if (el.offsetTop <= scrollY) current = el.id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const go = (id) => {
    setOpen(false);
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 80);
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <span className={styles.logo}>Bernardi <span>Noah</span></span>

        <div className={styles.pill}>
          {links.map(l => (
            <button
              key={l.id}
              className={active === l.id ? styles.active : ''}
              onClick={() => go(l.id)}
            >
              {l.label}
            </button>
          ))}
        </div>

        <button className={styles.ctaBtn} onClick={() => go('contact')}>
          Me contacter
        </button>

        <button
          className={styles.burger}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      <div className={`${styles.mobileMenu} ${open ? styles.open : ''}`}>
        {links.map(l => (
          <button key={l.id} onClick={() => go(l.id)}>{l.label}</button>
        ))}
        <button onClick={() => go('contact')}>Contact</button>
      </div>
    </header>
  );
}
