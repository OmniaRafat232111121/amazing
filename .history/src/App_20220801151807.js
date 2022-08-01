import React from 'react';
import GlobalStyle from './globalStyles';
import HomePages from './Pages/HomePages'
import Navbar from './components/Navbar/Navbar';


function App() {
	return (
		<>
			<GlobalStyle />
		   <HomePages/>
		</>
	);
}

export default App;