import { useSelector } from 'react-redux'
import CartProduct from '../Components/Organisms/CartProduct'

const useCart = () => {
  const cart = useSelector(({ cart }) => cart)
  let total = 0
  const products = cart.map((p, i) => {
    total = total + p.amount * p.quantity
    return <CartProduct key={i} {...p} />
  })

  return { products, total }
}
export default useCart
