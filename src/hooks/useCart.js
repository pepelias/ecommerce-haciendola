import { useSelector } from 'react-redux'
import CartProduct from '../Components/Organisms/CartProduct'

const useCart = () => {
  const cart = useSelector(({ cart }) => cart)
  let total = 0
  const products = cart.map((p) => {
    total = total + p.amount * p.quantity
    return <CartProduct key={p.product.handle} {...p} />
  })

  return { products, total }
}
export default useCart
