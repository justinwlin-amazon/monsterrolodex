import { Component } from "react";

class CardList extends Component {
	render() {
		const { monsters } = this.props;
		return (
			<div className="card-list">
				{monsters.map((monster) => {
					const { id } = monster;
					return (
						<div className="card-container" key={id}>
							<img
								alt={"monster" + id}
								src={`https://robohash.org/${id}?set=set2&size=180x180`}
							/>
							<h2>{monster.name}</h2>
							<p>{monster.email}</p>
						</div>
					);
				})}
			</div>
		);
	}
}

export default CardList;
