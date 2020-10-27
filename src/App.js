import React from 'react';
import Navbar from './Navbar';
import Home from './Home'
import About from './About'
import Store from './Store'
import {Route, Switch, Redirect} from 'react-router-dom';




const App = () => {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
	            <Route exact path="/about" component={About} />
	            <Route exact path="/store" component={Store} />
	            <Redirect to= "/" />
			</Switch>

		</>
		)
}


export default App;