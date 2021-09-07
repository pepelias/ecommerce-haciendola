import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import useRequest from '../../hooks/useRequest'
import { setCollections } from '../../redux/actionCreators'
import Icon from '../Molecules/Icon'
import AccountMenuItem from './AccountMenuItem'

const Menu = ({ handleToggle }) => {
  const [collections] = useRequest({ endpoint: '/collections' })
  const counter = useSelector(({ cart }) => cart.length)
  // Añadir collections al estado
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setCollections(collections))
  }, [collections])

  // Cerrar el menu
  const handleClick = (e) => {
    if (!e.target.matches('.main-menu__link')) return false
    handleToggle()
  }
  return (
    <nav className="main-navigator">
      <ul className="mobile-menu">
        <NavLink to="/carrito" className="button icon">
          <span className="mini-counter">{counter || ''}</span>
          <Icon icon="shopping-cart"></Icon>
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
            <Icon icon="shopping-cart">
              Carrito {counter ? `(${counter})` : ''}
            </Icon>
          </NavLink>
        </li>
        <AccountMenuItem />
      </ul>
    </nav>
  )
}
export default Menu
