import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import './compStyle.css'

class Footer extends Component {
	active = {
	};
	footer = {
		display: "flex",
		justifyContent: "space-evenly",
		listStyleType: "none"

	};
	render() {
		return (
			<footer>
			<div style={this.footer}>
        <NavLink to="/" activeStyle={this.active}>
          Login
        </NavLink>
				<NavLink to="Homepage" activeStyle={this.active}>
				Home
				</NavLink>
				<NavLink to="Profile" activeStyle={this.active}>
				Profile
				</NavLink>
				<NavLink to="Statistics" activeStyle={this.active}>
				Statistics
				</NavLink>
				<NavLink exact to="Managment" activeStyle={this.active}>
				Managment	
				</NavLink>

			</div>
			</footer>

		);
	}

}
export default Footer