import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './';
import HomePages from './Pages/HomePages'



function App() {
	return (
		<>

		   <GlobalStyle />
		   <Navbar/>
		   <HomePages/>
		   <Footer/>
		</>
	);
}

export default App;