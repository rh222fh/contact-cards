import React from 'react';
import Contact from './Contact';

const Contacts = ({ contactNames }) => {
	const contacts = contactNames.map(name => {
		return <Contact name={name} key={name} />;
	});
	return <div>{contacts}</div>;
};

export default Contacts;
