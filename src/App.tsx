import React, { FC } from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';

const App: FC = () => {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles['App-link']}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>This project have:</p>
        <ul>
          <li>TypeScript</li>
          <li>ESLint</li>
          <li>Prettier</li>
          <li>Husky</li>
          <li>SASS</li>
          <li>Testing - Jest</li>
        </ul>
      </header>
    </div>
  );
};

export default App;
