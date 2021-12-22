// import styles
import styles from '../css/Search.module.css';
// import icons from react-icons
import { FaSearch } from 'react-icons/fa';
// import from react
import { useEffect, useState } from 'react';
// import from react-router-dom
import { useHistory } from 'react-router-dom';
// import custom hooks
import { useQuery } from '../hooks/useQuery';

export function Search() {
	const [searchText, setSearchText] = useState("");
	const history = useHistory();
	const query = useQuery();
	const search = query.get('search');
	useEffect(() => {
		setSearchText(search || "")
	}, [search]);
	const handleSubmit = (e) => {
		e.preventDefault();
		history.push('/?search='+searchText)
	}
	return (
		<form className={styles.searchContainer} onSubmit={handleSubmit}>
			<div className={styles.searchBox}>
				<input className={styles.searchInput}
					type="text"
					value={searchText}
					onChange={(e)=>setSearchText(e.target.value)}
				/>
				<button
					className={styles.searchButton}
					type="submit"
				>
					<FaSearch />
				</button>
			</div>
		</form>
	)
}
