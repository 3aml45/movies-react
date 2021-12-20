// import styles
import styles from './css/MoviesGrid.module.css';
//import json "movies"
import movies from './movies.json';
// import components
import { MovieCard } from './MovieCard';


export function MoviesGrid() {
	return (
		<ul className={styles.moviesGrid}>
			{movies.map((movie)=>(
				<MovieCard key={movie.id} movie={movie} />
			))}
		</ul>
	)
}
