import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Currency } from '../../helpers/formats'
import useInCart from '../../hooks/useInCart'
import useQuantity from '../../hooks/useQty'
import useRequest from '../../hooks/useRequest'
import { addToCart } from '../../redux/actionCreators'
import ErrorMessage from '../Molecules/ErrorMessage'
import Icon from '../Molecules/Icon'
import Loader from '../Molecules/Loader'
import Quantity from '../Molecules/Quantity'

const ProductPage = ({ match }) => {
  // Data
  const [product, error, loading] = useRequest({
    endpoint: `/products/${match.params.product}`,
    defaultValue: null,
  })
  const dispatch = useDispatch()
  const productInCart = useInCart(match.params.product)

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
  if (loading) return <Loader>Cargando información del producto</Loader>
  if (error) return <ErrorMessage>{error}</ErrorMessage>

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
        <p className="pdetail-info__content">
          Stock: {stock}. <Quantity value={productInCart?.quantity} />
        </p>
        {stock === 0 ? (
          <ErrorMessage>Producto agotado.</ErrorMessage>
        ) : (
          <form className="pdetail-buybox" onSubmit={toCart}>
            <div className="pdetail-buybox__qty">
              <button onClick={decrementQty}>
                <Icon icon="minus" />
              </button>
              <input
                value={quantity}
                onChange={setQty}
                onFocus={(e) => e.target.select()}
                inputMode="numeric"
              />
              <button onClick={incrementQty}>
                <Icon icon="plus" />
              </button>
            </div>
            <button>
              <Icon icon="shopping-cart">Añadir al carrito</Icon>
            </button>
          </form>
        )}
      </section>
    </article>
  )
}
export default ProductPage
