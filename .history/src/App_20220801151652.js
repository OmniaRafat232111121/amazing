import React from 'react';
import GlobalStyle from './globalStyles';

import Navbar from './components/Navbar/Navbar';


function App() {
	return (
		<>
			<GlobalStyle />
			<Navbar />
      <HomePage/>
		</>
	);
}

export default App;