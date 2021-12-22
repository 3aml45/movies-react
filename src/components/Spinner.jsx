//import styles
import styles from '../css/Spinner.module.css';
//import icons from react-icons
import { FaSpinner } from 'react-icons/fa';

export function Spinner() {
	return (
		<div className={styles.spinnerContainer}>
			<FaSpinner className={styles.spinner} size={80} />
		</div>
	)
}
