import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Register } from './pages/index'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Register />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
