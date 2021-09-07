import { Link } from 'react-router-dom'
import { Currency, formatDateOfBackend } from '../../helpers/formats'

const HistoryItem = ({
  selected,
  orderId,
  orderDate,
  totalOrderPrice,
  products,
}) => {
  const to = `/historial/${orderId}`
  return (
    <li className={`history-item ${orderId === selected ? 'selected' : ''}`}>
      <Link to={to}>
        <h2 className="history-item__title margin-0">
          Realizado {formatDateOfBackend(orderDate)}
        </h2>
        <h3 className="history-item__price">
          {Currency.format(parseInt(totalOrderPrice))}
        </h3>
        <p className="history-item__content">{products.length} productos.</p>
      </Link>
    </li>
  )
}
export default HistoryItem
