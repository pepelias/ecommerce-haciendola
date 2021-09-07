import useRequest from '../../hooks/useRequest'
import ErrorMessage from '../Molecules/ErrorMessage'
import Loader from '../Molecules/Loader'
import Product from './Product'

const BestSellers = () => {
  const [products, error] = useRequest({
    endpoint: '/products/getBestSellers',
  })

  if (error) return <ErrorMessage>{error}</ErrorMessage>
  if (products.length === 0) return <Loader>Cargando productos</Loader>
  return (
    <div className="products-grid">
      {products.map((product, i) => (
        <Product key={i} {...product} />
      ))}
    </div>
  )
}
export default BestSellers
