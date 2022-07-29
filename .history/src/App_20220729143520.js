import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './globalStyles';
import HomePages from './Pages/HomePages';
const App = () => {
  return (
<Router>
<GlobalStyle/>
<Navbar/>
<Switch>
<Route path="/" exact component={HomePage} />
</Switch>
<HomePages
</Router>
  )
}

export default App