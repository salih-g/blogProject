import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Topbar from './Components/Topbar';

import Home from './Pages/Home';
import Write from './Pages/Write';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Settings from './Pages/Settings';
import Single from './Pages/Single';

const App = () => {
	const user = false;

	return (
		<Router>
			<Topbar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>

				<Route path='/write'>{user ? <Write /> : <Register />}</Route>

				<Route path='/login'>{user ? <Home /> : <Login />}</Route>

				<Route path='/register'>{user ? <Home /> : <Register />}</Route>

				<Route path='/settings'>{user ? <Settings /> : <Register />}</Route>

				<Route path='/post/:postId'>
					<Single />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
