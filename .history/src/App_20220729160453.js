import React from 'react'
import GlobalStyle from './globalStyles';
 import HomePages from './Pages/HomePages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
    <div className="App"> 
        <Routes>
          <Route path='/' element={<HomePages />}></Route>
        </Routes>    
    </div>
    </>
	);
}

export default App