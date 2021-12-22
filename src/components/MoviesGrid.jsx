// import styles
import styles from '../css/MoviesGrid.module.css';
//import json "movies"
// import movies from './movies.json';
// import components
import { MovieCard } from './MovieCard';
// import from react
import { useEffect, useState } from 'react';
// import custom functions
import { get } from '../utils/httpClient';



export function MoviesGrid() {
	const [movies, setMovies] = useState([]);
	
	useEffect(()=>{
		// fetch(
		// 	"https://api.themoviedb.org/3/discover/movie/?api_key=9e55e70322adb52b8edc5b55564a0a2d"
		// ).then(result => result.json()).then(data => {
		// 	setMovies(data.results);
		// 	console.log(movies)
		// })
		get('/discover/movie').then(data=>{
			setMovies(data.results);
		})
	}, []);
	return (
		<ul className={styles.moviesGrid}>
			{movies.map((movie) => (
				<MovieCard key={movie.id} movie={movie} />
			))}
		</ul>
	)
}
