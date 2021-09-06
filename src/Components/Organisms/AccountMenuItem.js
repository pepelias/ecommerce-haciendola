import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../redux/actionCreators'
import Icon from '../Molecules/Icon'

const AccountMenuItem = () => {
  const logged = useSelector(({ session }) => session)
  const dispatch = useDispatch()
  const exit = () => dispatch(signOut())
  if (!logged)
    return (
      <li className="main-menu__item">
        <NavLink to="/login" className="main-menu__link">
          <Icon icon="sign-in">Login</Icon>
        </NavLink>
      </li>
    )
  return (
    <li className="main-menu__item">
      <span className="main-menu__link">
        <Icon icon="user-circle">Mi cuenta</Icon>
      </span>
      <ul className="main-menu__submenu">
        <li className="main-menu__item">
          <NavLink to="/historial" className="main-menu__link">
            <Icon icon="history">Historial de pedidos</Icon>
          </NavLink>
        </li>
        <li className="main-menu__item">
          <span className="main-menu__link pointer" onClick={exit}>
            <Icon icon="sign-out">Cerrar sesión</Icon>
          </span>
        </li>
      </ul>
    </li>
  )
}

export default AccountMenuItem
