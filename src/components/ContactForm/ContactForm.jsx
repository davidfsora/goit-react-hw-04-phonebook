import React from 'react';
import styles from '../Styles.module.css'

export default function ContactForm({ handleAddInfo, handleAddName, handleAddNumber, name, number }){
	return (
		<div>
			<form onSubmit={handleAddInfo}
				style={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					padding: '20px',
				}}>
				<div style={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					gap: '10px',
					padding: '20px',
					border: '1px solid #000',
				}}>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						value={name}
						// pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						pattern="^[a-zA-Zа-яА-Я\s'-]*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
						onChange={handleAddName}
						className={styles.input}
						required
					/>
					<label htmlFor="number">Number</label>
					<input
						type="tel"
						name="number"
						value={number}
						// pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						pattern="\\+?\\d{0,4}[-.\\s]?\\(?\\d{1,4}\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						onChange={handleAddNumber}
						className={styles.input}
						required
					/>
					<button type='submit' className={styles.button}>Add contact</button>
				</div>
			</form>
		</div>
	);
}
