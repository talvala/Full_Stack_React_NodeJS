import React, { Component } from 'react'
import Profile from './Profile'

class ProfileList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			scores: [],
			tasks: []
		};
		this.eachItem1 = this.eachItem1.bind(this)
		this.eachItem2 = this.eachItem2.bind(this)
		this.add1 = this.add1.bind(this)
		this.add2 = this.add2.bind(this)
		this.nextID = this.nextID.bind(this)
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
	add2(name) {
		this.setState(prevState => ({
			tasks: [
				...prevState.tasks,
				{
					id: this.nextID(),
					name: name

				}]
		}))
	}
	nextID() {
		this.uniqueId = this.uniqueId || 0
		return this.uniqueId++
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
 					self.add2(data2.name);
 				})
 			})
 	}

	eachItem1(scores,i) {
		return (
			<div key={'containter'+i} className="card" style={{width: 10 + 'rem', marginBottom: 7+'px', display: 'inline-block'}}>
				<div className="card-body">
					<Homepage key={'scores'+i} index={i} >
						 <h5 className="card-title">{scores.scores}</h5>
						 <p className="card-text">{scores.name}</p>
						 <p className="card-text">{scores.scores} points</p>
					</Homepage>
				</div>
			</div>
			)
	}

	eachItem2(tasks,i) {
		return (
			<div key={'containter'+i} className="card" style={{width: 10 + 'rem', marginBottom: 7+'px', display: 'inline-block'}}>
				<div className="card-body">
					<Homepage key={'tasks'+i} index={i} >
						 <h5 className="card-title">{tasks.tasks}</h5>
						 <p className="card-text">{tasks.name}</p>
					</Homepage>
				</div>
			</div>
			)
	}
	render() {
		return (
		<div>
			<div className="scoreslist">
				{this.state.scores.map(this.eachItem1)}
			</div>
			<div className="taskslist">
				{this.state.tasks.map(this.eachItem2)}
			</div>
		</div>
		)
	}
}

export default HomepageList