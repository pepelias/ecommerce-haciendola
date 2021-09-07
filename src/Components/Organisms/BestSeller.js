import { Link } from 'react-router-dom'
import { Currency } from '../../helpers/formats'

const BestSeller = ({ title, imageSrc, variantPrice, handle }) => {
  const price = Currency.format(parseInt(variantPrice))
  const slug = `/productos/${handle}`
  return (
    <div className="best-seller">
      <Link to={slug}>
        <div>
          <div className="best-seller__image">
            <img src={imageSrc} alt={title} />
          </div>
          <div className="best-seller__content">
            <h2>{title}</h2>
            <h3>{price}</h3>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default BestSeller
