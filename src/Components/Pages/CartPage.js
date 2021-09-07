import { Currency } from '../../helpers/formats'
import useCart from '../../hooks/useCart'
import Message from '../Molecules/Message'

const CartPage = () => {
  const { products, total } = useCart()
  return (
    <div className="cart-page">
      <section className="cart-page__products">
        <h1>Productos en el carrito:</h1>
        {products.length === 0 ? (
          <Message>No hay nada en tu carrito</Message>
        ) : (
          <div className="cart-page__products-container">{products}</div>
        )}
      </section>
      <section className="cart-page__detail">
        <h1>Resumen del pedido:</h1>
        <p className="cart-page__total">
          Total a pagar:
          <span>{Currency.format(total)}</span>
        </p>
      </section>
    </div>
  )
}
export default CartPage
