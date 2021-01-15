import React from 'react'
import ToDo from './Containers/ToDo'
import Greeting from './Containers/Greeting'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'


const App = () => {
    return (
  <Router>
    <Switch>
      <Route path='/todo' component={ToDo}></Route>
      <Route path='/' component={Greeting}></Route> 
    </Switch>
  </Router>
    )
}

export default App

//import { Link } from 'react-router-dom' onto Container files, use <Link to='/path'>CLICK</Link> tags to create navigation