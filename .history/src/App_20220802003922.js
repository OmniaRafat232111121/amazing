import React from 'react';
import GlobalStyle from './globalStyles';
import HomePages from './Pages/HomePages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<R>
				<Route path="/" exact component={HomePages} />
			</R>
			<Footer />
		</Router>
	);
}

export default App;