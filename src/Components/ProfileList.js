import React, { Component } from 'react'
import Profile from './Profile'

class ProfileList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			profile: [],
			completed: [],
			saved: []
		};
		this.eachItem1 = this.eachItem1.bind(this)
		this.eachItem2 = this.eachItem2.bind(this)
		this.eachItem3 = this.eachItem3.bind(this)
		this.add1 = this.add1.bind(this)
		this.add2 = this.add2.bind(this)
		this.add3 = this.add3.bind(this)
		this.nextID = this.nextID.bind(this)
	}

	add1(scores, achievments, tasks_done) {
		this.setState(prevState => ({
			profile: [
				...prevState.profile,
				{
					id: this.nextID(),
					scores: scores,
					achievments: achievments,
					tasks_done: tasks_done

				}]
		}))
	}
	add2(completed_tasks) {
		this.setState(prevState => ({
			completed: [
				...prevState.completed,
				{
					// fetch('https://hometaskss.herokuapp.com/tasks/+')
					id: this.nextID(),
					completed_tasks: completed_tasks

				}]
		}))
	}
	add3(taken_tasks) {
		this.setState(prevState => ({
			saved: [
				...prevState.saved,
				{
					id: this.nextID(),
					taken_tasks: taken_tasks

				}]
		}))
	}
	nextID() {
		this.uniqueId = this.uniqueId || 0
		console.log(this.uniqueId)
		return this.uniqueId++
	}

	componentDidMount() {
		var newObj = JSON.parse(sessionStorage.getItem('userDetails'));
 		var id = newObj.googleId;
 		const url1 = "https://hometaskss.herokuapp.com/getUserProfileSummary"
 		fetch(url1)
 		.then((res1) => {
 				return res1.json();
 			})
 		.then((data1) => {
 				var self=this;
 				data1.map((data1) => {
 					self.add1(data1.scores, data1.achievments, data1.tasks_done);
 				})
 			})

 		fetch('https://hometaskss.herokuapp.com/getUserCompletedTasks', {
  			method: "POST",
  			body: JSON.stringify({
   			 googleId: id
  			}),
  			headers: {
  				"Accept": "application/json",
    			"Content-Type": "application/json; charset=UTF-8"
  			}
  		})
 		.then((res2) => {
 				// console.log(res2.json())
 				return res2.json();
 			})
 		.then((data2) => {
 				var self=this;
 				data2.map((data2) => {
 					self.add2(data2.tasks.completed_tasks);
 				})
 			})
 		fetch('https://hometaskss.herokuapp.com/getUserSavedTasks', {
  			method: "POST",
  			body: JSON.stringify({
   			 googleId: id
  			}),
  			headers: {
    			"Content-Type": "application/json; charset=UTF-8"
  			}
  		})
 		.then((res3) => {
 				return res3.json();
 			})
 		.then((data3) => {
 				var self=this;
 				data3.map((data3) => {

 					self.add3(data3.tasks.taken_tasks);
 				})
 			})
 	}

	eachItem1(profile,i) {
		return (
			<div key={'containter'+i} className="card" style={{width: 10 + 'rem', marginBottom: 7+'px', display: 'inline-block'}}>
				<div className="card-body">
					<Profile key={'profile'+i} index={i} >
						 <h5 className="card-title">{profile.profile}</h5>
						 <p className="card-text">{profile.scores}</p>
						 <p className="card-text">{profile.achievments}</p>
						 <p className="card-text">{profile.tasks_done}</p>
					</Profile>
				</div>
			</div>
			)
	}

	eachItem2(completed,i) {
		return (
			<div key={'containter'+i} className="card" style={{width: 10 + 'rem', marginBottom: 7+'px', display: 'inline-block'}}>
				<div className="card-body">
					<Profile key={'completed'+i} index={i} >
						 <h5 className="card-title">{completed.completed}</h5>
						 <p className="card-text">{completed.completed_tasks}</p>
					</Profile>
				</div>
			</div>
			)
	}
	eachItem3(saved,i) {
		return (
			<div key={'containter'+i} className="card" style={{width: 10 + 'rem', marginBottom: 7+'px', display: 'inline-block'}}>
				<div className="card-body">
					<Profile key={'saved'+i} index={i} >
						 <h5 className="card-title">{saved.saved}</h5>
						 <p className="card-text">{saved.taken_tasks}</p>
					</Profile>
				</div>
			</div>
			)
	}
	render() {
		return (
		<div>
			<div className="profilelist">
				{this.state.profile.map(this.eachItem1)}
			</div>
			<div className="completedlist">
				{this.state.completed.map(this.eachItem2)}
			</div>
			<div className="savedlist">
				{this.state.saved.map(this.eachItem3)}
			</div>
		</div>
		)
	}
}

export default ProfileList