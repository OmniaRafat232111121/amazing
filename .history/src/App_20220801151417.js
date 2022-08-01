import React from 'react';
import GlobalStyle from './globalStyles';
import HomePages from './pages/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route path="/" exact component={HomePages} />
			</Switch>
		
		</Router>
	);
}

export default App;