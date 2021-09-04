import Loader from '../Molecules/Loader'
import Banner from '../Organisms/Banner'
import Product from '../Organisms/Product'

const products = []

const Products = () => {
  return (
    <>
      <Banner title="Tienda" img="/assets/products.jpg" />
      <section className="container page-section">
        <h1>Todos los productos</h1>
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

export default Products
