import useRequest from '../../hooks/useRequest'
import Loader from '../Molecules/Loader'
import Banner from '../Organisms/Banner'
import Product from '../Organisms/Product'

const ProductsList = ({ bannerTitle, bannerImg, title, endpoint }) => {
  const [products] = useRequest({ endpoint })
  return (
    <>
      <Banner title={bannerTitle} img={bannerImg} />
      <section className="container page-section">
        <h1>{title}</h1>
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

export default ProductsList
