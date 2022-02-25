import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className={styles.footer}>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login / Criar</Link>
      </nav>
    </div>
  );
};
