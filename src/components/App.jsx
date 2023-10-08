import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm.jsx";
import SearchFilter from "./SearchFilter/SearchFilter.jsx";
import ContactList from "./ContactList/ContactList.jsx";

export default function App(){

	const [contacts, setContacts] = useState([]);
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	const [filterValue, setFilterValue] = useState('');

	const handleAddName = (evt) => {
		setName(evt.target.value);
	};

	const handleAddNumber = (evt) => {
		setNumber(evt.target.value);
	};

	const handleAddInfo = (evt) => {
		evt.preventDefault();

		if (name.trim() === '' || number.trim() === '') return;

		if (contacts.some((contact) => contact.name === name)) {
			alert(`${name} is already in contacts.`);
			return;
		}

		const newContact = {
			id: nanoid(),
			name: name,
			number: number,
		};

		setContacts((prevContacts) => [...prevContacts, newContact]);
		setName('');
		setNumber('');
	};

	const handleFilterSearch = (evt) => {
		setFilterValue(evt.target.value);
	};

	const applyFilter = contacts.filter((contact) =>
		contact.name.toLowerCase().includes(filterValue.toLowerCase())
	);

	const deleteContact = (id) => {
		setContacts((prevContacts) =>
			prevContacts.filter((contact) => contact.id !== id)
		);
	};

	useEffect(() => {
		const storedContacts = localStorage.getItem('contacts');
		if (storedContacts) {
			setContacts(JSON.parse(storedContacts));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('contacts', JSON.stringify(contacts));
	}, [contacts]);

	return (
		<div
			style={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
				fontSize: 20,
				color: '#010101'
			}}
		>
			<h1>Phonebook</h1>
			<ContactForm
				name={name}
				number={number}
				handleAddName={handleAddName}
				handleAddNumber={handleAddNumber}
				handleAddInfo={handleAddInfo}
			></ContactForm>
			<h2>Contacts</h2>
			<SearchFilter
				filter={filterValue}
				filterSearch={handleFilterSearch}
			></SearchFilter>
			<ContactList
				contacts={applyFilter}
				deleteContact={deleteContact}
			></ContactList>
		</div>
	);
}
