// import styles
import styles from './css/MovieCard.module.css';

export function MovieCard({ movie }) {
	const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
	return (
		<li className={styles.movieCard}>
			<img
				width={345}
				// height={345}
				height={280}
				className={styles.movieImage}
				src={imageUrl}
				alt={movie.title}
			/>
			<br/>
			{movie.title}
		</li>
	)
}
