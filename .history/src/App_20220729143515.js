import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './globalStyles';
const App = () => {
  return (
<Router>
<GlobalStyle/>
<Navbar/>
<Switch>
<Route path="/" exact component={HomePage} />
</Switch>

</Router>
  )
}

export default App