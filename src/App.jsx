// import styles
import styles from './css/App.module.css';
// import components
import { MoviesGrid } from './MoviesGrid';
// import from react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export function App() {
  return (
    <Router className={styles.app}>
      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
        <Switch>
          <Route path="/movie">Movie</Route>
          <Route path="/">Home</Route>
        </Switch>
        {/* <MoviesGrid /> */}
      </main>
    </Router>
  );
}

