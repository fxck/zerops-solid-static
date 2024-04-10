import type { Component } from 'solid-js';

import logo from './logo.svg';
import zerops from './zerops.svg';

import styles from './App.module.css';


const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <div class={styles.logos}>
          <img src={logo} class={styles.logo} alt="logo" />
          <span class={styles.plus}>+</span>
        <img src={zerops} class={styles.logo} alt="logo" />
        </div>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
