import React from 'react';
import GlobalStyle from './globalStyles';
import HomePages from './Pages/HomePages';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Routes>
				
			</Routes>
			<Footer />
		</Router>

		<Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
   
  </Router>
	);
}

export default App;