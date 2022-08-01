import React from 'react';
import Footer from './components/Footer/Footer';
import Nav from './Pages/HomePages'
import GlobalStyle from './globalStyles';
import HomePages from './Pages/HomePages'
function App() {
	return (
		<div>
		
		   <GlobalStyle />
		   <Navbar/>
		   <HomePages/>
		   
		   <Footer/>
	
		</div>
	);
}

export default App;