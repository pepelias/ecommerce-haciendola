import Header from './Components/Organisms/Header'
import './scss/main.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import ProductsList from './Components/Pages/ProductsList'
import CollectionPage from './Components/Pages/CollectionPage'

function App() {
  return (
    <Router>
      <Header />
      <main className="main-container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/productos" exact>
            <ProductsList
              bannerTitle="Tienda"
              bannerImg="/assets/products.jpg"
              title="Todos los productos"
              endpoint={`/products`}
            />
          </Route>
          <Route path="/colecciones/:collection" component={CollectionPage} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
