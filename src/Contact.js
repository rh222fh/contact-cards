import React from 'react';
import './Contact.css';
const Contact = ({ name }) => {
	//const contactImage = `http://flathash.com/${props.name}`;
	const contactImage = `https://robohash.org/${name}?set=set2`;
	return (
		<div className='br2 pa1 ma3 mw5 grow shadow-2 dib'>
			<p className='f4 code ttu b light-silver'>{name}</p>
			<div className='bg-light-gray br-100 ma4'>
				<img className='br-100' src={contactImage} alt='avatar' />
			</div>
		</div>
	);
};
export default Contact;
