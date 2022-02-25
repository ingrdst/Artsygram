import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="">
          <Dogs />
        </Link>
        <Link className={styles.logo} to="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};
