import React from 'react';
import GlobalStyle from './globalStyles';
import HomePages from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route path="/" exact component={HomePages} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;