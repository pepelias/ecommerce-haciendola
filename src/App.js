import Header from './Components/Organisms/Header'
import './scss/main.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Components/Pages/HomePage'
import ProductsList from './Components/Pages/ProductsList'
import CollectionPage from './Components/Pages/CollectionPage'
import ProductPage from './Components/Pages/ProductPage'
import store from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main className="main-container">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/productos" exact>
              <ProductsList
                bannerTitle="Tienda"
                bannerImg="/assets/products.jpg"
                title="Todos los productos"
                endpoint={`/products`}
              />
            </Route>
            <Route path="/productos/:product" component={ProductPage} />
            <Route path="/colecciones/:collection" component={CollectionPage} />
          </Switch>
        </main>
      </Router>
    </Provider>
  )
}

export default App
