import logo from '../../logo.svg'
import Menu from './Menu'

const Header = () => {
  return (
    <header className="main-header">
      <div className="main-header__container">
        <img src={logo} alt="Home And Carpet Logo" className="main-logo" />
        <Menu />
      </div>
    </header>
  )
}
export default Header
