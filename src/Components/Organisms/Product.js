import { NavLink } from 'react-router-dom'

const Product = ({
  imageSrc,
  title,
  handle,
  variantPrice,
  variantInventoryQty: stock,
}) => {
  const slug = `/productos/${handle}`
  return (
    <article
      className={`product-card ${parseInt(stock) === 0 ? 'no-stock' : ''}`}
    >
      <div className="product-card__image">
        <NavLink to={slug}>
          <img src={imageSrc} alt={title} />
        </NavLink>
      </div>
      <div className="product-card__content">
        <NavLink to={slug}>
          <h2 className="product-card__title">{title}</h2>
        </NavLink>
        <h3 className="product-card__price">${variantPrice}</h3>
        {stock > 0 ? (
          <p className="product-card__detail">Stock: {stock}</p>
        ) : (
          <p className="product-card__detail no-stock">Agotado</p>
        )}
        <NavLink to={slug} className="product-card__link">
          Ver producto
        </NavLink>
      </div>
    </article>
  )
}

export default Product
