// import styles
import styles from '../css/Search.module.css';
// import icons from react-icons
import { FaSearch } from 'react-icons/fa';
// import from react-router-dom
import { useSearchParams } from 'react-router-dom';

export function Search() {
	// const navigate = useNavigate();
	const [query, setQuery] = useSearchParams();
	const search = query.get('search');
	return (
		<form
			className={styles.searchContainer}
		>
			<div className={styles.searchBox}>
				<input className={styles.searchInput}
					type="text"
					value={search || ""}
					placeholder='Title'
					aria-label='Search Movies'
					onChange={(e)=>{
						const value = e.target.value;
						setQuery({search: value})
						// navigate('/?search='+value)
					}}
				/>
					<FaSearch size={20} color="black" className={styles.searchButton} />
			</div>
		</form>
	)
}
