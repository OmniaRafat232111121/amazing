import React from 'react';
import GlobalStyle from './globalStyles';
import HomePages from './Pages/HomePages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
	return (
	
				
			</Routes>
			<Footer />
		</Router>

		<Router>
		<GlobalStyle />
		<Navbar />
      <Routes>
	  <Route path="/"  element={HomePages} />
     
      </Routes>
	  <Footer />
  </Router>
	);
}

export default App;