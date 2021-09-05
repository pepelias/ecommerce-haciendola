import { Link } from 'react-router-dom'
import { Currency } from '../../helpers/numberFormat'

const Product = ({
  imageSrc,
  title,
  handle,
  variantPrice,
  variantInventoryQty: stock,
}) => {
  const price = Currency.format(parseInt(variantPrice))
  const slug = `/productos/${handle}`
  return (
    <article
      className={`product-card ${parseInt(stock) === 0 ? 'no-stock' : ''}`}
    >
      <div className="product-card__image">
        <Link to={slug}>
          <img src={imageSrc} alt={title} />
        </Link>
      </div>
      <div className="product-card__content">
        <Link to={slug}>
          <h2 className="product-card__title">{title}</h2>
        </Link>
        <h3 className="product-card__price">{price}</h3>
        {stock > 0 ? (
          <p className="product-card__detail">Stock: {stock}</p>
        ) : (
          <p className="product-card__detail no-stock">Agotado</p>
        )}
        <Link to={slug} className="product-card__link">
          Ver producto
        </Link>
      </div>
    </article>
  )
}

export default Product
