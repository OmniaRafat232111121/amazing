import React from 'react'
import GlobalStyle from './globalStyles';
 import HomePages from './Pages/HomePages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Routes>
				<Route path="/" exact component={HomePages} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App