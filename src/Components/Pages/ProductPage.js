import { Link } from 'react-router-dom'
import useRegisters from '../../hooks/useRequest'
import Error from '../Molecules/Error'
import Icon from '../Molecules/Icon'
import Loader from '../Molecules/Loader'

const ProductPage = ({ match }) => {
  const [product] = useRegisters({
    endpoint: `/products/${match.params.product}`,
    defaultValue: null,
  })
  if (!product) return <Loader>Cargando información del producto</Loader>
  const {
    title,
    Vendor,
    type,
    variantInventoryQty: stock,
    variantPrice,
    imageSrc,
  } = product

  return (
    <article className="pdetail">
      <header className="pdetail-header">
        <h1 className="pdetail-title">{title}</h1>
      </header>
      <section className="pdetail-image">
        <div className="pdetail-image__container">
          <img src={imageSrc} alt={title} />
        </div>
      </section>
      <section className="pdetail-info">
        <div className="pdetail-metadata">
          <Link to={`/colecciones/${type}`} className="pdetail-metadata__type">
            {type}
          </Link>
          <span className="pdetail-metadata__item">{Vendor}</span>
        </div>
        <h2 className="pdetail-info__price">${variantPrice}</h2>

        {parseInt(stock) === 0 ? (
          <Error>Producto agotado</Error>
        ) : (
          <>
            <p className="pdetail-info__content">Stock: {stock}</p>
            <form className="pdetail-buybox">
              <div className="pdetail-buybox__qty">
                <button>
                  <Icon icon="plus" />
                </button>
                <input defaultValue="1" />
                <button>
                  <Icon icon="minus" />
                </button>
              </div>
              <button>
                <Icon icon="shopping-cart">Añadir al carrito</Icon>
              </button>
            </form>
          </>
        )}
      </section>
    </article>
  )
}
export default ProductPage
