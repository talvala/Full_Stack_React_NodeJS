import React, { Component } from 'react'


class Profile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			editing: false
		}
		this.render = this.render.bind(this)
	}
	render() {
		return (
			<div className='profile'>
				<div>{this.props.children}</div>
				<span>
				</span>
			</div>
		)
		return (
			<div className='completed'>
				<div>{this.props.children}</div>
				<span>
				</span>
			</div>
		)
		return (
			<div className='saved'>
				<div>{this.props.children}</div>
				<span>
				</span>
			</div>
		)
	}
}

export default Profile