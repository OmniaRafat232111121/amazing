import React from 'react'
import GlobalStyle from './globalStyles';
 import HomePages from './Pages/HomePages';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
     
        </Route>
      </Routes>
    </BrowserRouter>
	);
}

export default App