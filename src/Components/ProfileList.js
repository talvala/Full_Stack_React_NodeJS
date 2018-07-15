import React, { Component } from 'react'
import Profile from './Profile'

class ProfileList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			profile: [],
			// achievments: []
			// saved: []
		};
		this.eachItem1 = this.eachItem1.bind(this)
		this.add1 = this.add1.bind(this)
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
	nextID() {
		this.uniqueId = this.uniqueId || 0
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
 	}

	eachItem1(profile,i) {
		return (
			<div key={'containter'+i} className="card" style={{width: 10 + 'rem', marginBottom: 7+'px', display: 'inline-block'}}>
				<div className="card-body">
					<Profile key={'profile'+i} index={i} >
						 <h5 className="card-title">{profile.profile}</h5>
						 <p className="card-text">{profile.scores} Points</p>
						 <p className="card-text">{profile.achievments}</p>
						 <p className="card-text">{profile.tasks_done} tasks done so far</p>
					</Profile>
				</div>
			</div>
			)
	}

	// eachItem2(achievments,i) {
	// 	return (
	// 		<div key={'containter'+i} className="card" style={{width: 10 + 'rem', marginBottom: 7+'px', display: 'inline-block'}}>
	// 			<div className="card-body">
	// 				<Profile key={'achievments'+i} index={i} >
	// 					 <h5 className="card-title">{achievments.achievments}</h5>
	// 				</Profile>
	// 			</div>
	// 		</div>
	// 		)
	// }
	// eachItem3(saved,i) {
	// 	return (
	// 		<div key={'containter'+i} className="card" style={{width: 10 + 'rem', marginBottom: 7+'px', display: 'inline-block'}}>
	// 			<div className="card-body">
	// 				<Profile key={'saved'+i} index={i} >
	// 					 <h5 className="card-title">{saved.saved}</h5>
	// 					 <p className="card-text">{saved.taken_tasks}</p>
	// 				</Profile>
	// 			</div>
	// 		</div>
	// 		)
	// }
	render() {
		return (
		<div>
			<div className="profilelist">
				{this.state.profile.map(this.eachItem1)}
			</div>
		</div>
		)
	}
}

export default ProfileList