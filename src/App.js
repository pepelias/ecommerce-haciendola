import Header from './Components/Organisms/Header'
import './scss/main.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Pages/Home'

function App() {
  return (
    <Router>
      <Header />
      <main className="main-container">
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </main>
    </Router>
  )
}

export default App
