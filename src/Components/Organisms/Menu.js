import { NavLink } from 'react-router-dom'
import useRequest from '../../hooks/useRequest'
import Icon from '../Molecules/Icon'

const Menu = ({ handleToggle }) => {
  const [collections] = useRequest({ endpoint: '/collections' })
  const handleClick = (e) => {
    console.log(e.target)
    if (!e.target.matches('.main-menu__link')) return false
    handleToggle()
  }
  return (
    <nav className="main-navigator">
      <ul className="mobile-menu">
        <NavLink to="/carrito" className="button icon">
          <Icon icon="shopping-cart" />
        </NavLink>
        <button className="icon" onClick={handleToggle}>
          <Icon icon="menu" />
        </button>
      </ul>
      <ul className="main-menu" onClick={handleClick}>
        <li className="main-menu__item">
          <NavLink to="/" className="main-menu__link" exact>
            <Icon icon="home">Inicio</Icon>
          </NavLink>
        </li>
        <li className="main-menu__item">
          <NavLink to="/productos" className="main-menu__link">
            <Icon icon="store">Productos</Icon>
          </NavLink>
        </li>
        <li className="main-menu__item">
          <span className="main-menu__link">
            <Icon icon="archive">Collecciones</Icon>
          </span>
          <ul className="main-menu__submenu">
            {collections.map(({ handle }) => (
              <li key={handle} className="main-menu__item">
                <NavLink
                  to={`/colecciones/${handle}`}
                  className="main-menu__link"
                >
                  <Icon icon="layer">{handle}</Icon>
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
        <li className="main-menu__item">
          <NavLink to="/carrito" className="main-menu__link" exact>
            <Icon icon="shopping-cart">Ver mi carrito</Icon>
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
