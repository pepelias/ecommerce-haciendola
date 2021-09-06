import useInCart from '../../hooks/useInCart'
import Quantity from './Quantity'

const Stock = ({ handle, stock: defaultStock }) => {
  const product = useInCart(handle)
  const stock = product ? defaultStock - product.quantity : defaultStock
  console.log('Stock', handle, product)

  if (stock <= 0)
    return (
      <>
        <span className="out-of-stock">Producto agotado</span>
        <Quantity value={product?.quantity} />
      </>
    )
  return (
    <>
      <span>Stock: {stock}</span>
      <Quantity value={product?.quantity} />
    </>
  )
}
export default Stock
