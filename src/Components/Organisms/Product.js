import { Link } from 'react-router-dom'
import { Currency } from '../../helpers/numberFormat'
import Stock from '../Molecules/Stock'

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
    <article className={`product-card`}>
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
        <p className="product-card__detail">
          <Stock handle={handle} stock={parseInt(stock)} />
        </p>
        <Link to={slug} className="product-card__link">
          Ver producto
        </Link>
      </div>
    </article>
  )
}

export default Product
