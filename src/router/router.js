import React from "react"
import { Route } from 'react-router-dom'
import ManagmentsList from '../Components/ManagmentsList'
import HomepageList from '../Components/HomepageList'
import StatisticsList from '../Components/StatisticsList'
import Footer from '../Footer'

const ReactRouter =()=>{
	return(
		<React.Fragment>
			<Route exact path="/" component={ManagmentsList} />
			<Route path="/Homepage" component={HomepageList} />
			<Route path="/Statistics" component={StatisticsList} />
			<Footer/>
		</React.Fragment>
	);}

export default ReactRouter