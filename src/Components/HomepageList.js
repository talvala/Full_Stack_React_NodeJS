import React, { Component } from 'react'
import Homepage from './Homepage'

class HomepageList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			scores: [],
			tasks: [],
			user: []
		};
		this.eachItem1 = this.eachItem1.bind(this)
		this.eachItem2 = this.eachItem2.bind(this)
		this.add1 = this.add1.bind(this)
		this.add2 = this.add2.bind(this)
		this.nextID = this.nextID.bind(this)
		this.takeAtask = this.takeAtask.bind(this)
	}

	add1(name, score) {
		this.setState(prevState => ({
			scores: [
				...prevState.scores,
				{
					id: this.nextID(),
					name: name,
					scores: score

				}]
		}))
	}
	add2(name, _id) {
		this.setState(prevState => ({
			tasks: [
				...prevState.tasks,
				{
					id: this.nextID(),
					_id: _id,
					name: name

				}]
		}))
	}
	nextID() {
		this.uniqueId = this.uniqueId || 0
		return this.uniqueId++
	}

	takeAtask(id) {
		fetch('https://hometaskss.herokuapp.com/takeATask/', {
  			method: "PUT",
  			body: JSON.stringify({
   			 taskId: id,
    		 usrName: "Mom"
  			}),
  			headers: {
    			"Content-Type": "application/json; charset=UTF-8"
  			}
  		})
	}

	componentDidMount() {
 		const url1 = "https://hometaskss.herokuapp.com/getAllScores"
 		fetch(url1)
 		.then((res1) => {
 				return res1.json();
 			})
 		.then((data1) => {
 				var self=this;
 				data1.map((data1) => {
 					self.add1(data1.name, data1.scores);
 				})
 			})
		const url2 = "https://hometaskss.herokuapp.com/getAllAvailableTasks"
 		fetch(url2)
 		.then((res2) => {
 				return res2.json();
 			})
 		.then((data2) => {
 				var self=this;
 				data2.map((data2) => {
 					self.add2(data2.name, data2._id);
 				})
 			})
 		// var newObj = JSON.parse(sessionStorage.getItem('userDetails'));
 		// console.log(newObj.googleId)
 	}

	eachItem1(scores,i) {
		return (
			<div key={'containter'+i} className="card" style={{width: 7 + 'rem', marginBottom: 7+'px', display: 'inline-block', 'text-align': 'center'}}>
				<div className="card-body">
					<Homepage key={'scores'+i} index={i} >
						 <div  id="scoresImages">{scores.name}</div>
						<div id="myPoints"> <p className="card-text" id="points">{scores.scores} points</p></div>
					</Homepage>
				</div>
			</div>
			)
	}

	eachItem2(tasks,i) {
		return (
			<div key={'containter'+i} className="card">
				<div className="card-body">
					<Homepage key={'tasks'+i} index={i} >
						 <h5 className="card-title">{tasks.tasks}</h5>
						 <button className="card-text" onClick={() =>{this.takeAtask(tasks._id)}}>{tasks.name}	<h6> 5 points</h6></button>

					</Homepage>
				</div>
			</div>
			)
	}
	render() {
		return (
		<div className="HomepageComponents">
			<div className="scoreslist">
				{this.state.scores.map(this.eachItem1)}
			</div>
			<h5 className="title"> DO SOMETHING RIGHT NOW  </h5>
			<div className="taskslist">
				{this.state.tasks.map(this.eachItem2)}
			</div>
		</div>
		)
	}
}

export default HomepageList