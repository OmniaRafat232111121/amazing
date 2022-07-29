import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './globalStyles';
import HomePages from './Pages/HomePages';
const App = () => {
  return (
<Router>
<GlobalStyle/>
<Navbar/>
<Switch>
<Route path="/HomePag" exact  element={<HomePages/>} />
</Switch>
<Footer/>
</Router>
  )
}

export default App