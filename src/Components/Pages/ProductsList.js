import useRequest from '../../hooks/useRequest'
import ErrorMessage from '../Molecules/ErrorMessage'
import Loader from '../Molecules/Loader'
import Banner from '../Organisms/Banner'
import Product from '../Organisms/Product'

const ProductsList = ({ bannerTitle, bannerImg, title, endpoint }) => {
  const [products, error, loader] = useRequest({ endpoint })
  return (
    <>
      <Banner title={bannerTitle} img={bannerImg} />
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <section className="container page-section">
          <h1>{title}</h1>
          {loader ? (
            <Loader>Cargando productos</Loader>
          ) : (
            <div className="products-grid">
              {products.map((product, i) => (
                <Product key={i} {...product} />
              ))}
            </div>
          )}
        </section>
      )}
    </>
  )
}

export default ProductsList
