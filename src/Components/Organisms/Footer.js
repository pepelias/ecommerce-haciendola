import Icon from '../Molecules/Icon'

const Footer = () => (
  <footer className="main-footer">
    <ul className="main-footer__social-links">
      <li>
        <a href="#" className="main-footer__icon">
          <Icon icon="facebook" />
        </a>
      </li>
      <li>
        <a href="#" className="main-footer__icon">
          <Icon icon="instagram" />
        </a>
      </li>
      <li>
        <a href="#" className="main-footer__icon">
          <Icon icon="twitter" />
        </a>
      </li>
    </ul>
    <a href="mailto:contacto@ciroalfombras.cl">contacto@ciroalfombras.cl</a>
  </footer>
)

export default Footer
