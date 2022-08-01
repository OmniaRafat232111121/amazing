import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './globalStyles';
import HomePages from './Pages/HomePages'



function App() {
	return (
		<div>
		
		   <GlobalStyle />
		   
		   <HomePages/>
		   
		   <Footer/>
	
		</div>
	);
}

export default App;