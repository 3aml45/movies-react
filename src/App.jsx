// import styles
import styles from './css/App.module.css';
// import components
import { MovieDetails } from './pages/MovieDetails';
import { LandingPage } from './pages/LandingPage';
// import from react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export function App() {
  return (
    <Router className={styles.app}>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/movie/:movieId">
            <MovieDetails />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
        {/* <MoviesGrid /> */}
      </main>
    </Router>
  );
}

