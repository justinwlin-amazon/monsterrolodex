import "./App.css";
import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			monsters: [],
			filteredText: "",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((json) => this.setState({ monsters: json }));
	}

	monsterList() {
		return this.state.monsters.map((monster) => {
			if (
				monster.name
					.toLowerCase()
					.includes(this.state.filteredText.toLowerCase())
			) {
				return (
					<div key={monster.id}>
						<h1>{monster.name}</h1>
					</div>
				);
			}
		});
	}

	handleChange = (event) => {
		this.setState({ filteredText: event.target.value });
	};

	render() {
		const { handleChange } = this;
		return (
			<div className="App">
				<input
					className="search-box"
					type="search"
					placeholder="Search monsters"
					onChange={handleChange}
				/>
				{this.monsterList()}
			</div>
		);
	}
}
export default App;
