import React, { Component } from 'react';
import './App.css';
import Contacts from './Contacts';
import SearchBox from './SearchBox';

class App extends Component {
	constructor() {
		super();
		this.state = {
			nameArray   : [],
			searchField : ''
		};
	}

	componentDidMount() {
		fetch('https://overwatch-api.net/api/v1/hero')
			.then(response => response.json())
			.then(users => this.setState({ nameArray: users.data }));
	}

	onSearchChange = event => {
		this.setState({ searchField: event.target.value });
	};

	render() {
		const searchFilter = this.state.nameArray.filter(nameArray => {
			return nameArray.name
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

export default App;
