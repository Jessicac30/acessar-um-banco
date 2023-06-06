import React from 'react';
import Link from 'next/link';
import styles from '../styles/Menu.module.css';

export const Menu: React.FC = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.nav}>
        <li>
          <Link href="/">
            <a className={styles.menuLink}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/LivroLista">
            <a className={styles.menuLink}>Catálogo</a>
          </Link>
        </li>
        <li>
          <Link href="/LivroDados">
            <a className={styles.menuLink}>Novo</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
