import "./App.css";
import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
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

	handleChange = (event) => {
		this.setState({ filteredText: event.target.value });
	};

	render() {
		const { handleChange } = this;

		const filteredMonster = this.state.monsters.filter((monster) =>
			monster.name.toLowerCase().includes(this.state.filteredText.toLowerCase())
		);

		return (
			<div className="App">
				<SearchBox
					className="search-box"
					onChangeHandler={handleChange}
					placeholder="Search for monsters"
				/>
				<CardList monsters={filteredMonster} />
			</div>
		);
	}
}
export default App;
