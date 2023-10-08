import React from 'react';
import styles from '../Styles.module.css';

export default function ContactList({ contacts, deleteContact }){
	return (
		<div>
			<ul>
				{contacts.map((contact) =>
					<li key={contact.id}>{contact.name} : {contact.number}
						<button onClick={() => deleteContact(contact.id)} className={styles.button}>Delete</button>
					</li>
				)}
			</ul>
		</div>
	);
}
