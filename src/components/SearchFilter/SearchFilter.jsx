import React from "react";
import styles from '../Styles.module.css'

export default function SearchFilter({ filter, filterSearch }){
	return (
		<div style={{
			display: 'flex',
			justifyContent: 'center',
			flexDirection: 'column',
			padding: '20px',
			gap: '10px',
		}}>
			<p>Find contacts by name</p>
			<input
				type="text"
				name="filter"
				value={filter}
				onChange={filterSearch}
				className={styles.input}
			/>
		</div>
	);
}
