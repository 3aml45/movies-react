// import styles
import styles from '../css/MoviesGrid.module.css';
//import json "movies"
// import movies from './movies.json';
// import components
import { MovieCard } from './MovieCard';
import { Spinner } from './Spinner';
import { Empty } from './Empty';
// import from react
import { useEffect, useState } from 'react';
// import custom functions
import { get } from '../utils/httpClient';
// import from react-router-dom
import { useLocation } from 'react-router-dom';
// import custom hooks
// import { useQuery } from '../hooks/useQuery.js';
// import from react-infinite-scroll-component
import InfiniteScroll from 'react-infinite-scroll-component';




export function MoviesGrid({ search }) {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	useEffect(() => {
		setIsLoading(true)
		const searchUrl = search
			? '/search/movie?query=' + search + '&page=' + page
			: '/discover/movie?page=' + page;
		get(searchUrl).then(data => {
			setMovies((prevMovies)=>prevMovies.concat(data.results));
			setIsLoading(false)
			setHasMore(data.page < data.total_pages)
		})
	}, [search, page]);
	if(!isLoading && movies.length === 0){
		return <Empty />
	}
	return (
		<InfiniteScroll
			dataLength={movies.length}
			hasMore={hasMore}
			next={()=>setPage((prevPage)=>prevPage + 1)}
			loader={<Spinner/>}
			endMessage={
				<p style={{ textAlign: 'center' }}>
					No more movies of: <b> {search} </b>
				</p>
			}
		>
			<ul className={styles.moviesGrid}>
				{movies.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</ul>
		</InfiniteScroll>
	)
}
