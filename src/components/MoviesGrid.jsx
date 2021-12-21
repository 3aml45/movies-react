// import styles
import styles from '../css/MoviesGrid.module.css';
//import json "movies"
// import movies from './movies.json';
// import components
import { MovieCard } from './MovieCard';
// import from react
import { useEffect, useState } from 'react';


export function MoviesGrid() {
	const [movies, setMovies] = useState([]);
	useEffect(()=>{
		fetch(
			"https://api.themoviedb.org/3/discover/movie/?api_key=9e55e70322adb52b8edc5b55564a0a2d"
		).then(result => result.json()).then(data => {
			setMovies(data.results);
			console.log(movies)
		})
		// fetch("https://api.themoviedb.org/3/discover/movie", {
		// 	headers: {
		// 		Authorization:
		// 			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
		// 		"Content-Type": "application/json;charset=utf-8",
		// 	},
		// })
	}, []);
	return (
		<ul className={styles.moviesGrid}>
			{movies.map((movie) => (
				<MovieCard key={movie.id} movie={movie} />
			))}
		</ul>
	)
}
