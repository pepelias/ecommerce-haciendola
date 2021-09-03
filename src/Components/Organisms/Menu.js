import { useRef } from 'react'
import Icon from '../Molecules/Icon'

const Menu = () => {
  const menu = useRef()
  const handleToggle = () => {
    menu.current.classList.toggle('active')
  }
  return (
    <nav className="main-navigator">
      <ul className="mobile-menu">
        <a href="/cart" className="button icon">
          <Icon icon="shopping-cart" />
        </a>
        <button className="icon" onClick={handleToggle}>
          <Icon icon="menu" />
        </button>
      </ul>
      <ul className="main-menu" ref={menu}>
        <li className="main-menu__item">
          <a href="/" className="main-menu__link">
            <Icon icon="home">Inicio</Icon>
          </a>
        </li>
        <li className="main-menu__item">
          <a href="/" className="main-menu__link">
            <Icon icon="archive">Colecciones</Icon>
          </a>
        </li>
        <li className="main-menu__item">
          <a href="/" className="main-menu__link">
            <Icon icon="shopping-cart">Carrito de compras</Icon>
          </a>
        </li>
        <li className="main-menu__item">
          <a href="/" className="main-menu__link">
            <Icon icon="user-circle">Iniciar Sesión</Icon>
          </a>
        </li>
      </ul>
    </nav>
  )
}
export default Menu
