// import styles
import styles from '../css/MoviesGrid.module.css';
//import json "movies"
// import movies from './movies.json';
// import components
import { MovieCard } from './MovieCard';
import { Spinner } from './Spinner';
// import from react
import { useEffect, useState } from 'react';
// import custom functions
import { get } from '../utils/httpClient';
// import from react-router-dom
import { useLocation } from 'react-router-dom';
// import custom hooks
import { useQuery } from '../hooks/useQuery.js';



export function MoviesGrid() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// const location = useLocation();
	// console.log(location.search)

	const query = useQuery();
	const search = query.get('search');

	useEffect(() => {
		setIsLoading(true)
		const searchUrl = search ? '/search/movie?query=' + search : '/discover/movie';
		get(searchUrl).then(data => {
			setMovies(data.results);
			setIsLoading(false)
		})
	}, [search]);
	if (isLoading) {
		return <Spinner />
	}
	return (
		<ul className={styles.moviesGrid}>
			{movies.map((movie) => (
				<MovieCard key={movie.id} movie={movie} />
			))}
		</ul>
	)
}
