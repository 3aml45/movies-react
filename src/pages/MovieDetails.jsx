// import styles
import styles from '../css/MovieDetails.module.css';
//import movie
// import movie from './movie.json';
// import from react-router-dom
import { useParams } from 'react-router-dom';
// import custom functions
import { get } from '../utils/httpClient';
// import form react
import { useEffect, useState } from 'react';
//import components
import { Spinner } from '../components/Spinner';

export function MovieDetails() {
	const { movieId } = useParams();
	const [movie, setMovie] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setIsLoading(true)
		get('/movie/' + movieId).then(data => {
			setMovie(data)
			setIsLoading(false)
		})
	}, [movieId])
	if(isLoading){
		return <Spinner />;
	}
	if (!movie) {
		return null;
	}
	const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
	return (
		<div className={styles.detailsContainer}>
			<img
				className={`${styles.col} ${styles.movieImage}`}
				src={imageUrl}
				alt={movie.title}
			/>
			<div className={`${styles.col} ${styles.movieDetails}`}>
				<p className={styles.firstItem}><strong>Title:</strong> {movie.title} </p>
				<p>
					<strong>Genres:</strong>{" "}
					{movie.genres.map((genre) => {
						return genre.name
					}).join(" , ")}
				</p>
				<p><strong>Description:</strong> {movie.overview} </p>
			</div>
		</div>
	)
}
