import useRequest from '../../hooks/useRequest'
import Loader from '../Molecules/Loader'
import Banner from '../Organisms/Banner'
import Product from '../Organisms/Product'

const HomePage = () => {
  const [products] = useRequest({ endpoint: '/products/getBestSellers' })
  return (
    <>
      <Banner title="Elegancia y Confort" principal />
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