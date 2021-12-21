// import styles
import styles from '../css/MoviesGrid.module.css';
//import json "movies"
import movies from './movies.json';
// import components
import { MovieCard } from './MovieCard';
// import from react
import { useEffect } from 'react';


export function MoviesGrid() {
	useEffect(()=>{
		fetch("https://api.themoviedb.org/3/discover/movie", {
			headers: {
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWRjOTAwOTIzMDc5NWM5ZGY0ZjJjYzNmNWI3MDBjYiIsInN1YiI6IjYxYmQwOGE2ZmE0MDQ2MDA0MjJlMDdjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jcEudvxfrXOMPxdwtl5HyVzxd_L8rO5pKe6M5O6JvjM",
				"Content-Type": "application/json;charset=utf-8",
			},
		})
	})
	return (
		<ul className={styles.moviesGrid}>
			{movies.map((movie) => (
				<MovieCard key={movie.id} movie={movie} />
			))}
		</ul>
	)
}
