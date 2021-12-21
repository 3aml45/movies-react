// import styles
import styles from '../css/MovieCard.module.css';
// import from react-router-dom
import { Link } from 'react-router-dom';

export function MovieCard({ movie }) {
	const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
	return (
		<li className={styles.movieCard}>
			<Link to={`/movie/${movie.id}`}>
				<img
					width={345}
					// height={345}
					height={280}
					className={styles.movieImage}
					src={imageUrl}
					alt={movie.title}
				/>
				<br />
				{movie.title}
			</Link>
		</li>
	)
}
