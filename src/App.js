import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Register, Dashboard, Home, Edit } from './pages/index'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/edit/:id'>
          <Edit />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
