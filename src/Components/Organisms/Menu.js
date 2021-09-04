import { NavLink } from 'react-router-dom'
import Icon from '../Molecules/Icon'

const Menu = ({ handleToggle }) => {
  return (
    <nav className="main-navigator">
      <ul className="mobile-menu">
        <NavLink to="/cart" className="button icon">
          <Icon icon="shopping-cart" />
        </NavLink>
        <button className="icon" onClick={handleToggle}>
          <Icon icon="menu" />
        </button>
      </ul>
      <ul className="main-menu">
        <li className="main-menu__item">
          <NavLink to="/" className="main-menu__link" exact>
            <Icon icon="home">Inicio</Icon>
          </NavLink>
        </li>
        <li className="main-menu__item">
          <NavLink to="/products" className="main-menu__link">
            <Icon icon="store">Productos</Icon>
          </NavLink>
        </li>
        <li className="main-menu__item">
          <span className="main-menu__link">
            <Icon icon="archive">Collecciones</Icon>
          </span>
        </li>
        <li className="main-menu__item">
          <NavLink to="/cart" className="main-menu__link" exact>
            <Icon icon="shopping-cart">Carrito de compras</Icon>
          </NavLink>
        </li>
        <li className="main-menu__item">
          <NavLink to="/login" className="main-menu__link" exact>
            <Icon icon="user-circle">Login</Icon>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Menu
