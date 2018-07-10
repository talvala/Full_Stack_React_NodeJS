import React, { Component } from "react"
import { NavLink } from "react-router-dom"

class Footer extends Component {
	active = {
		fontWeight: "bold",
		color: "red"
	};
	footer = {
		display: "flex",
		justifyContent: "space-evenly",
		listStyle: "none"
	};
	render() {
		return (
			<div style={this.footer}>
				<NavLink to="Homepage" activeStyle={this.active}>
				Home
				</NavLink>
				<NavLink to="MyIdeas" activeStyle={this.active}>
				Profile
				</NavLink>
				<NavLink to="Statistics" activeStyle={this.active}>
				Statistics
				</NavLink>
				<NavLink exact to="/" activeStyle={this.active}>
				Managment	
				</NavLink>
			</div>

		);
	}

}
export default Footer