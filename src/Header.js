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
	};
	header = {
		display: "flex",
		justifyContent: "space-evenly",
		listStyle: "none"
	};


	render() {
		return (
			<div style={this.header} className="header">
				<NavLink to="#" activeStyle={this.active}>
					<h4>num Days left</h4>
					<h4>for this week</h4>
				</NavLink>
				<NavLink to="#" className="mypoints" activeStyle={this.active}>
				Points
				</NavLink>
			</div>

		);
	}

}
export default Header