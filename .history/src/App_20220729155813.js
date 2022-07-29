import React from 'react'
import GlobalStyle from './globalStyles';
// import HomePages from './Pages/HomePages';

// import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route path="/" exact component={HomePage} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App