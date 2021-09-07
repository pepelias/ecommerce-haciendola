import { Currency, formatDateOfBackend } from '../../helpers/formats'
import Icon from '../Molecules/Icon'

const ProductItem = ({ title, price, quantity }) => (
  <div className="product-item list-item">
    <h3>{title}</h3>
    <p className="price product-item__price">{Currency.format(price)}</p>
    <p className="metadata-color">Cantidad: {quantity}</p>
  </div>
)

const HistoryDetail = ({
  orderDate,
  orderDeliveryAdress,
  totalOrderPrice,
  products,
}) => {
  return (
    <>
      <h1>Detalle del pedido:</h1>
      <div className="history-detail">
        <h2>
          <Icon icon="banknote">{Currency.format(totalOrderPrice)}</Icon>
        </h2>
        <p>
          <Icon icon="calendar">
            {formatDateOfBackend(orderDate).toUpperCase()}
          </Icon>
        </p>
        <p className="metadata-color">
          <Icon icon="location">{orderDeliveryAdress.toUpperCase()}</Icon>
        </p>

        <h2>Productos incluidos</h2>
        <ul className="product-list">
          {products.map((p) => (
            <ProductItem key={p.handle} {...p} />
          ))}
        </ul>
      </div>
    </>
  )
}
export default HistoryDetail
