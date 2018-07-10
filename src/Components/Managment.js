import React, { Component } from 'react'
import MdDelete from 'react-icons/lib/md/delete'
import MdSave from 'react-icons/lib/md/save'
import MdEdit from 'react-icons/lib/md/edit'


class Managment extends Component {
	constructor(props) {
		super(props)
		this.state = {
			editing: false
		}
		this.edit = this.edit.bind(this)
		this.delete = this.delete.bind(this)
		this.save = this.save.bind(this)
		this.renderForm = this.renderForm.bind(this)
		this.renderUI = this.renderUI.bind(this)
	}
	edit(){
		this.setState({
			editing: true
		});
	}
	delete(){
		this.props.onDelete(this.props.index)
	}
	save(e){
		e.preventDefault()
		this.props.onChange(this._newManagment.value, this.props.index)
		this.setState({
			editing: false
		})
	}
	renderForm() {
		return(
			<div>
				<form>
					<textarea/>
					<button><MdSave/></button>
				</form>
			</div>
		)
	}
	renderUI() {
		return (
			<div className='managment'>
				<div>{this.props.children}</div>
				<span>
				<button> <MdEdit onClick={this.edit}/></button>
				<button> <MdDelete onClick={this.delete}/></button>
				</span>
			</div>
		)
	}
	render() {
		return this.state.editing ? this.renderForm(): this.renderUI()
	}
}

export default Managment