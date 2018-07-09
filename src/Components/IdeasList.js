import React, { Component } from 'react'
import Idea from './Idea'
import MdAdd from 'react-icons/lib/md/add'
import data from '../data/data.json'

class IdeasList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			ideas: [
				// {
				// 	id:0,
				// 	idea:"Tripper API",
				// 	group: "Shiri, Asaf"
				// },
				// {
				// 	id:1,
				// 	idea:"Cyber Crawler App",
				// 	group: "Tal, Nadav"
				// }
			]
		}
		this.eachIdea = this.eachIdea.bind(this)
		this.update = this.update.bind(this)
		this.delete = this.delete.bind(this)
		this.add = this.add.bind(this)
		this.nextID = this.nextID.bind(this)
	}

	// componentWillMount() {
	// 	var self=this
	// 	data.map(function(idea) {
	// 		console.log('idea')
	// 		self.add(idea.idea, idea.group)
	// 	})
	// }

	update(newIdea, i) {
		console.log('update: '+i+newIdea)
		this.setState(prevState => ({
			ideas: prevState.ideas.map(
				idea => (idea.id !== i)? idea : {...idea, idea: newIdea}
			)
		}))
	}

	delete(id) {
		console.log('delete at ',id)
		this.setState(prevState => ({
			ideas:prevState.ideas.filter(idea => idea.id !== id
				)
		}))
	}

	add(name, score) {
		this.setState(prevState => ({
			ideas: [
				...prevState.ideas,
				{
					id: this.nextID(),
					name: name,
					scores: score

				}]
		}))
	}
	nextID() {
		this.uniqueId = this.uniqueId || 0
		return this.uniqueId++
	}

	componentDidMount() {
 		const url = "https://hometaskss.herokuapp.com/getAllScores"
 		fetch(url)
 			.then((res) => {
 				return res.json();
 			})
 			.then((data) => {
 				var self=this;
 				data.map((data) => {
 					console.log('idea')
 					self.add(data.name, data.scores);
 				})
 			})
	 }

	eachIdea(idea,i) {
		return (
			<div key={'containter'+i} className="card" style={{width: 18 + 'rem', marginBottom: 7+'px'}}>
				<div className="card-body">
					<Idea key={'idea'+i} index={i} 
						onChange={this.update}
						onDelete={this.delete}>
						 <h5 className="card-title">{idea.idea}</h5>
						 <p className="card-text">{idea.name}</p>
						 <p className="card-text">{idea.scores}</p>

					</Idea>
				</div>
			</div>
			)
	}
	render() {
		return (
			<div className="ideaslist">
				{this.state.ideas.map(this.eachIdea)}
				 	<button onClick={this.add}
					id="add" className="btn btn-primary" style={{marginTop: 7+'px'}}>
					<MdAdd/></button>
			</div>
		)
	}
}

export default IdeasList