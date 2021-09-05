import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Currency } from '../../helpers/numberFormat'
import useQuantity from '../../hooks/useQty'
import useRegisters from '../../hooks/useRequest'
import { addToCart } from '../../redux/actionCreators'
import ErrorMessage from '../Molecules/ErrorMessage'
import Icon from '../Molecules/Icon'
import Loader from '../Molecules/Loader'

const ProductPage = ({ match }) => {
  // Data
  const [product, error] = useRegisters({
    endpoint: `/products/${match.params.product}`,
    defaultValue: null,
  })
  const dispatch = useDispatch()
  const productInCart = useSelector(({ cart }) =>
    cart.find(({ product: p }) => p.handle === match.params.product)
  )

  // Parsing
  const { title, Vendor, type, variantInventoryQty, variantPrice, imageSrc } =
    product || {}
  const amount = parseInt(variantPrice)
  const [stock, setStock] = useState()
  const price = Currency.format(amount)

  // Setear el stock
  useEffect(() => {
    const qty = parseInt(variantInventoryQty)
    if (productInCart) return setStock(qty - productInCart.quantity)
    setStock(qty)
  }, [product, productInCart])

  // Cantidad
  const { quantity, incrementQty, decrementQty, setQty } = useQuantity(stock)

  // Añadir al carrito
  const toCart = (e) => {
    e.preventDefault()
    dispatch(addToCart({ product, amount, price, quantity }))
  }

  // Rendering
  if (error) return <ErrorMessage>{error.message}</ErrorMessage>
  if (!product) return <Loader>Cargando información del producto</Loader>

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
        <h2 className="pdetail-info__price">{price}</h2>

        {parseInt(stock) === 0 ? (
          <ErrorMessage>Producto agotado</ErrorMessage>
        ) : (
          <>
            <p className="pdetail-info__content">
              Stock: {stock}.
              {productInCart && (
                <span>(Ya hay {productInCart.quantity} en tu carrito)</span>
              )}
            </p>
            <form className="pdetail-buybox" onSubmit={toCart}>
              <div className="pdetail-buybox__qty">
                <button onClick={incrementQty}>
                  <Icon icon="plus" />
                </button>
                <input value={quantity} onChange={setQty} />
                <button onClick={decrementQty}>
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
