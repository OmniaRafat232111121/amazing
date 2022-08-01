import React from 'react';
import GlobalStyle from './globalStyles';
import HomePages from './Pages/HomePages';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<>
		<GlobalStyle />
		<Navbar />
        <HomePages/>
     
	  <Footer />
	  </>
	);
}

export default App;