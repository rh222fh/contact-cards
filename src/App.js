import React, { Component } from 'react';
import './App.css';
import Contacts from './Contacts';
import SearchBox from './SearchBox';

class App extends Component {
	constructor() {
		super();
		this.state = {
			nameArray   : nameArray,
			searchField : ''
		};
	}

	onSearchChange = event => {
		this.setState({ searchField: event.target.value });
	};
	render() {
		const searchFilter = this.state.nameArray.filter(nameArray => {
			return nameArray
				.toLowerCase()
				.includes(this.state.searchField.toLowerCase());
		});

		return (
			<div className='tc'>
				<h1 className='f1 code light-silver'>CONTACTS</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Contacts contactNames={searchFilter} />
			</div>
		);
	}
}

const nameArray = [
	'Ned',
	'Tyrion',
	'Sam',
	'Tormund',
	'Hodor',
	'Jamie',
	'Ceresi',
	'Jon',
	'Sansa',
	'Petyr',
	'Varys',
	'Daenerys'
];

export default App;
