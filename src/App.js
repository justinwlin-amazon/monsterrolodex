import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			monsters: [],
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((json) => this.setState({ monsters: json }));
	}

	monsterList() {
		return this.state.monsters.map((monster) => (
			<div key={monster.id}>
				<h1>{monster.name}</h1>
			</div>
		));
	}
	render() {
		return <div className="App">{this.monsterList()}</div>;
	}
}
export default App;
