import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../logo.svg'
import Menu from './Menu'

const Header = () => {
  const header = useRef()
  const handleToggle = () => {
    header.current.classList.toggle('active')
  }
  return (
    <header className="main-header" ref={header}>
      <div className="main-header__container">
        <NavLink to="/">
          <img src={logo} alt="Ciro alfombras Logo" className="main-logo" />
        </NavLink>
        <Menu handleToggle={handleToggle} />
      </div>
    </header>
  )
}
export default Header
