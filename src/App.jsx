// import styles
import styles from './css/App.module.css';
// import components
import { MovieDetails } from './pages/MovieDetails';
import { LandingPage } from './pages/LandingPage';
// import from react-router-dom
import { BrowserRouter as Router, Routes as Routes, Route, Link, Navigate } from 'react-router-dom';

export function App() {
  return (
    <Router className={styles.app}>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/movie/:movieId" element={<MovieDetails/>} />
          <Route path="/" element={<LandingPage/>} />       
          <Route path="*" element={<Navigate replace to="/" />} />       
        </Routes>
      </main>
    </Router>
  );
}

