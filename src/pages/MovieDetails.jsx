// import styles
import styles from '../css/MovieDetails.module.css';
//import movie
import movie from './movie.json';

export function MovieDetails() {
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
