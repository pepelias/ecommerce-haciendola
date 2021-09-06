import Icon from './Icon'

const Quantity = ({ value }) =>
  value ? (
    <span className="iconify">
      <Icon icon="shopping-cart">{value} en tu carrito</Icon>
    </span>
  ) : null

export default Quantity
