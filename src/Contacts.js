import React from 'react';
import Contact from './Contact';

const Contacts = ({ contactNames }) => {
	const contacts = contactNames.map((name, i) => {
		return <Contact name={contactNames[i].name} key={contactNames[i].id} />;
	});
	return <div>{contacts}</div>;
};

export default Contacts;
