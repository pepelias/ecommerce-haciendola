import Header from './Components/Organisms/Header'
import './scss/main.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import HomePage from './Components/Pages/HomePage'
import ProductsList from './Components/Pages/ProductsList'
import CollectionPage from './Components/Pages/CollectionPage'
import ProductPage from './Components/Pages/ProductPage'
import store from './redux/store'
import CartPage from './Components/Pages/CartPage'
import { Provider } from 'react-redux'
import Footer from './Components/Organisms/Footer'
import LoginPage from './Components/Pages/LoginPage'
import PublicRoute from './Components/Molecules/PublicRoute'
import PrivateRoute from './Components/Molecules/PrivateRoute'
import HistoryPage from './Components/Pages/historyPage'

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
                bannerImg="./products.jpg"
                title="Todos los productos"
                endpoint={`/products`}
              />
            </Route>
            <Route path="/productos/:product" component={ProductPage} />
            <Route path="/colecciones/:collection" component={CollectionPage} />
            <Route path="/carrito" component={CartPage} />
            <PublicRoute path="/login" component={LoginPage} />
            <PrivateRoute path="/historial" component={HistoryPage} exact />
            <PrivateRoute path="/historial/:id" component={HistoryPage} />
            <Redirect to="/" />
          </Switch>
        </main>
        <Footer />
      </Router>
    </Provider>
  )
}

export default App
