import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Currency } from '../../helpers/numberFormat'
import { removeFromCart } from '../../redux/actionCreators'
import Icon from '../Molecules/Icon'

const CartProduct = ({ amount, price, quantity, product }) => {
  const dispatch = useDispatch()
  const element = useRef()
  const handleRemove = () => {
    element.current.classList.toggle('remove')
  }
  const dispatchRemove = () => {
    dispatch(removeFromCart(product.handle))
  }
  const link = `/productos/${product.handle}`
  return (
    <div className="cart-product" ref={element}>
      <div className="cart-product__image">
        <Link to={link}>
          <img src={product.imageSrc} alt={product.title} />
        </Link>
      </div>
      <div className="cart-product__info">
        <Link to={link}>
          <h1 className="cart-product__title">{product.title}</h1>
        </Link>
        <p>Precio unidad: {price}</p>
        <p>Cantidad: {quantity}</p>
        <p>
          <strong>Precio total:</strong> {Currency.format(amount * quantity)}
        </p>
      </div>
      <div className="cart-product__actions">
        <button className="icon" onClick={handleRemove}>
          <Icon icon="trash-can" />
        </button>
      </div>
      <div className="cart-product__remove-banner">
        <h2>¿Desea quitar este producto?</h2>
        <div className="buttons-container ">
          <button onClick={dispatchRemove}>
            <Icon icon="check-mark">Confirmar</Icon>
          </button>
          <button className="secondary" onClick={handleRemove}>
            <Icon icon="x-mark">Cancelar</Icon>
          </button>
        </div>
      </div>
    </div>
  )
}
export default CartProduct
