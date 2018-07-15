import React, { Component } from 'react'
import Statistics from './Statistics'

class StatisticsList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			scores: [],
			tasks: [],
			medalist: []
		};
		this.eachItem1 = this.eachItem1.bind(this)
		this.eachItem2 = this.eachItem2.bind(this)
		this.eachItem3 = this.eachItem3.bind(this)
		this.add1 = this.add1.bind(this)
		this.add2 = this.add2.bind(this)
		this.add3 = this.add3.bind(this)
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
	add2(name,tasks_done) {
		this.setState(prevState => ({
			tasks: [
				...prevState.tasks,
				{
					id: this.nextID(),
					name: name,
					tasks_done: tasks_done

				}]
		}))
	}
	add3(achievments) {
		this.setState(prevState => ({
			medalist: [
				...prevState.medalist,
				{
					id: this.nextID(),
					achievments: achievments

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
		const url2 = "https://hometaskss.herokuapp.com/mostTasksDoneSoFar"
 		fetch(url2)
 		.then((res2) => {
 				return res2.json();
 			})
 		.then((data2) => {
 				var self=this;
 				data2.map((data2) => {
 					self.add2(data2.name, data2.tasks_done);
 				})
 			})
 		const url3 = "https://hometaskss.herokuapp.com/getMedalist"
 		fetch(url3)
 		.then((res3) => {
 				return res3.json();
 			})
 		.then((data3) => {
 				var self=this;
 				data3.map((data3) => {
 					self.add3(data3.achievments);
 				})
 			})
 	}

	eachItem1(scores,i) {
		return (
			<div key={'containter'+i} className="card" style={{width: 10 + 'rem', marginBottom: 7+'px', display: 'inline-block'}}>
				<div id="blokcer">
				<div className="card-body">
					<Statistics key={'scores'+i} index={i} >
						 <p className="card-title">{scores.name}</p>
						 <p className="card-text">{scores.scores} points</p>
					</Statistics>
				</div>
				</div>
			</div>
			)
	}

	eachItem2(tasks,i) {
		return (
			<div key={'containter'+i} className="card" style={{width: 10 + 'rem', marginBottom: 7+'px', display: 'inline-block'}}>
        <p className="card-points">{tasks.tasks_done}</p>

				<div className="card-body">

					<Statistics key={'tasks'+i} index={i} >
						 <h5 className="card-title">{tasks.tasks}</h5>
						 <p className="card-text">{tasks.name}</p>
					</Statistics>
				</div>
			</div>
			)
	}
	eachItem3(medalist,i) {
		return (
			<div key={'containter'+i} className="card" style={{width: 10 + 'rem', marginBottom: 7+'px', display: 'inline-block'}}>
				<div className="card-body">
					<Statistics key={'medalist'+i} index={i} >
						 <h5 className="card-title">{medalist.medalist}</h5>

						<p className="card-text">{medalist.achievments}</p>

					</Statistics>
				</div>
			</div>

  )
  }
	render() {
		return (
		<div className="statisticComponent">
			<h5 className="headTitle"> <b>WEEKLY SCORES</b> </h5>


			<h5 className="title"> MOST POINTS THIS WEEK </h5>
			<div className="scoreslist">
				{this.state.scores.map(this.eachItem1)}
			</div>
      <h5 className="title"> MOST TASKS DONE SO FAR </h5>
			<div className="taskslist">
				{this.state.tasks.map(this.eachItem2)}
			</div>
      <h5 className="title"> THE MEDALIST </h5>
			<div className="achievmentslist">
				{this.state.medalist.map(this.eachItem3)}


			</div>

		</div>

		)
	}
}




export default StatisticsList