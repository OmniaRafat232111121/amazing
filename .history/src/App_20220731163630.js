// import React from 'react'
// import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './globalStyles';
import HomePages from './Pages/HomePages';


//  import Footer from './components/Footer/Footer';
//import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className='app'>
    <GlobalStyle/>
    <Navbar/>
    <HomePages/>
    </div>
	);
}

export default App