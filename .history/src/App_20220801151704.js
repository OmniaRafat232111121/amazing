import React from 'react';
import GlobalStyle from './globalStyles';
import HomePages from 
import Navbar from './components/Navbar/Navbar';


function App() {
	return (
		<>
			<GlobalStyle />
			<Navbar />
      <HomePages/>
		</>
	);
}

export default App;