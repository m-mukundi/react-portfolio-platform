import styles from "./SearchBar.module.css";

function SearchBar({ searchQuery, onSearchChange }) {
	return (
		<div className={styles.searchBarContainer}>
			<div className={styles.searchBar}>
				<span className={`material-symbols-outlined ${styles.searchIcon}`}>
					search
				</span>
				<input
					className={styles.searchInput}
					id="search-box"
					placeholder="Search projects by name or category..."
					type="text"
					value={searchQuery}
					onChange={(e) => onSearchChange(e.target.value)}
				/>
			</div>
		</div>
	);
}

export default SearchBar;
