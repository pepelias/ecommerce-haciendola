import useRequest from '../../hooks/useRequest'
import Loader from '../Molecules/Loader'
import Product from '../Organisms/Product'
import Slideshow from '../Organisms/Slideshow'

const HomePage = () => {
  const [products] = useRequest({ endpoint: '/products/getBestSellers' })
  return (
    <>
      <Slideshow />
      <section className="container page-section">
        <h1>Lo más vendido</h1>
        {products.length > 0 ? (
          <div className="products-grid">
            {products.map((product, i) => (
              <Product key={i} {...product} />
            ))}
          </div>
        ) : (
          <Loader>Cargando productos</Loader>
        )}
      </section>
    </>
  )
}

export default HomePage
