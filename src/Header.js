import React, { Component } from "react"
import { NavLink } from "react-router-dom"

class Header extends Component {
  constructor(props){
    super(props);

    global.GmailID = '';
    global.fullName = '';


  }

	active = {
		fontWeight: "bold",
		color: "red"
	};
	header = {
		display: "flex",
		justifyContent: "space-evenly",
		listStyle: "none"
	};
	render() {
		return (
			<div style={this.header}>
				<NavLink to="#" activeStyle={this.active}>
				Week day
				</NavLink>
				<NavLink to="#" activeStyle={this.active}>
				Points
				</NavLink>
			</div>

		);
	}

}
export default Header