import React, { Component } from 'react'


class Statistics extends Component {
	constructor(props) {
		super(props)
		this.state = {
			editing: false
		}
		this.render = this.render.bind(this)
	}
	render() {
		return (
			<div className='scores'>
				<div>{this.props.children}</div>
				<span>
				</span>
			</div>
		)
		return (
			<div className='tasks'>
				<div>{this.props.children}</div>
				<span>
				</span>
			</div>
		)
		return (
			<div className='medalist'>
				<div>{this.props.children}</div>
				<span>
				</span>
			</div>
		)
	}
}

export default Statistics