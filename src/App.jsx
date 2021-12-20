// import styles
import styles from './css/App.module.css';
// import components
import { MoviesGrid } from './MoviesGrid';

export function App() {
  return (
    <div className={styles.app}>
      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}

