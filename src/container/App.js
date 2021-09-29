import React, { Component } from 'react';
import CardList from '../component/CardList';
import { robot } from '../component/robot'
import Searchbox from '../component/SearchBox'
import Scroll from '../component/Scroll'
import './App.css';


class App extends Component {
	constructor(){
		super();
		this.state = {
			robot : [],
			searchField:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(
			response =>  response.json())
			.then(users => this.setState({ robot : users}));
		this.setState({ robot:robot })
	}
	onSearchChange = (event) =>{
		this.setState({ searchField :event.target.value });
	}

	render(){
		
		const {robot, searchField} = this.state
		const filteredRobots = robot.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})

		return !robot.length ? <h1>Loading</h1> :
		 (
			<div className='tc'>
				<h1 className ='f1'>Robot Friends</h1>
				<Searchbox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robot = {filteredRobots} />
				</Scroll>
			</div>
		);
		
	}
	

}

export default App;