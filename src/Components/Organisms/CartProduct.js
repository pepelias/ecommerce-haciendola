import { Currency } from '../../helpers/numberFormat'
import Icon from '../Molecules/Icon'

const CartProduct = ({ amount, price, quantity, product }) => {
  return (
    <div className="cart-product">
      <div className="cart-product__image">
        <img src={product.imageSrc} alt={product.title} />
      </div>
      <div className="cart-product__info">
        <h1 className="cart-product__title">{product.title}</h1>
        <p>Precio unidad: {price}</p>
        <p>Cantidad: {quantity}</p>
        <p>
          <strong>Precio total:</strong> {Currency.format(amount * quantity)}
        </p>
      </div>
      <div className="cart-product__actions">
        <button className="icon">
          <Icon icon="trash-can" />
        </button>
      </div>
    </div>
  )
}
export default CartProduct
