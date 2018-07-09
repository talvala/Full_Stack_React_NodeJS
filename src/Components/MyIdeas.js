import React, { Component } from 'react'
import Idea from './Idea'




class MyIdeas extends Component {
	constructor(props) {
		super(props)
		this.display = this.display.bind(this)
	}

	display() {
		console.log(test)
	}

	render() {
		return(
			<div className='idea'>
				<div>{this.props.children}</div>
	 			<span>
				</span>
			</div>
		)
	}
}

export default MyIdeas