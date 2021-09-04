import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import Icon from '../Molecules/Icon'

const Menu = () => {
  const menu = useRef()
  const handleToggle = () => {
    menu.current.classList.toggle('active')
  }
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
      <ul className="main-menu" ref={menu}>
        <li className="main-menu__item">
          <NavLink to="/" className="main-menu__link" exact>
            <Icon icon="home">Inicio</Icon>
          </NavLink>
        </li>
        <li className="main-menu__item">
          <span className="main-menu__link">
            <Icon icon="home">Collecciones</Icon>
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
