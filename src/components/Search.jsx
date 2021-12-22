// import styles
import styles from '../css/Search.module.css';
// import icons from react-icons
import { FaSearch } from 'react-icons/fa';
// import from react-router-dom
import { useHistory } from 'react-router-dom';
// import custom hooks
import { useQuery } from '../hooks/useQuery';

export function Search() {
	const history = useHistory();
	const query = useQuery();
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
						history.push('/?search='+value)
					}}
				/>
					<FaSearch size={20} color="black" className={styles.searchButton} />
			</div>
		</form>
	)
}
