import React, { Component } from 'react'
import Managment from './Managment'
import MdAdd from 'react-icons/lib/md/add'

class ManagmentsList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			managments: []
		}
		this.eachManagment = this.eachManagment.bind(this)
		this.update = this.update.bind(this)
		this.delete = this.delete.bind(this)
		this.add = this.add.bind(this)
		this.nextID = this.nextID.bind(this)
	}

	update(newManagment, i) {
		console.log('update: '+i+newManagment)
		this.setState(prevState => ({
			managments: prevState.managments.map(
				managment => (managment.id !== i)? managment : {...managment, managment: newManagment}
			)
		}))
	}

	delete(managment) {
		fetch('https://hometaskss.herokuapp.com/tasks/'+managment._id, {
  			method: "DELETE"
  		})
	}

	add(name, score, timetocomplete, timeittakes,_id) {
		this.setState(prevState => ({
			managments: [
				...prevState.managments,
				{
					id: this.nextID(),
					name: name,
					scores: score,
					timetocomplete: timetocomplete,
					timeittakes: timeittakes,
					_id: _id

				}]
		}))
	}

	create() {
		fetch('https://hometaskss.herokuapp.com/createTask/', {
  			method: "POST",
  			body: JSON.stringify({
   			 	name: "name",
				scores: "0",
				points: "0",
				timetocomplete: "0",
				timeittakes: "0"
  			}),
  			headers: {
    			"Content-Type": "application/json; charset=UTF-8"
  			}
  		})
	}

	nextID() {
		this.uniqueId = this.uniqueId || 0
		return this.uniqueId++
	}

	componentDidMount() {
 		const url = "https://hometaskss.herokuapp.com/getAllTasks"
 		fetch(url)
 			.then((res) => {
 				return res.json();
 			})
 			.then((data) => {
 				var self=this;
 				data.map((data) => {
 					self.add(data.name, data.scores, data.timetocomplete, data.timeittakes, data._id);
 				})
 			})
	 }

	eachManagment(managment,i) {
		return (
			<div key={'containter'+i} className="card" style={{width: 10 + 'rem', marginBottom: 7+'px', display: 'inline-block'}}>
				<div className="card-body">
					<Managment key={'managment'+i} index={i} 
						onChange={this.update}
						onDelete={() => {this.delete(managment)}}>
						 <h5 className="card-title">{managment.managment}</h5>
						 <p className="card-text">{managment.name}</p>
						 <p className="card-text">{managment.scores} points</p>
						 <p className="card-text">{managment.timetocomplete} hours left</p>
						 <p className="card-text">Takes {managment.timeittakes} minutes</p>
					</Managment>
				</div>
			</div>
			)
	}
	render() {
		return (
			<div className="managmentslist">
				{this.state.managments.map(this.eachManagment)}
				<button onClick={this.create}
					id="add" className="btn btn-primary" style={{marginTop:7+'px', display: 'block'}}>
					<MdAdd/></button>
			</div>
		)
	}
}

export default ManagmentsList