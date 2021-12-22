// import styles
import styles from '../css/MovieCard.module.css';
// import from react-router-dom
import { Link } from 'react-router-dom';
// import placeholder image
import placeholder from '../placeholder.jpg';
// import custom functions
import { getMovieImage } from '../utils/getMovieImage';

export function MovieCard({ movie }) {
	const imageUrl = getMovieImage(movie.poster_path, 500);
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
