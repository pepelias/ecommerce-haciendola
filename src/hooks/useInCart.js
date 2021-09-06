import { useSelector } from 'react-redux'

const useInCart = (handle) => {
  return useSelector(({ cart }) =>
    cart.find(({ product: p }) => p.handle === handle)
  )
}
export default useInCart
