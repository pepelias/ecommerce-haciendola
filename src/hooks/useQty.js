import { useEffect, useState } from 'react'

const useQuantity = (max) => {
  const [quantity, setQuantity] = useState(1)
  useEffect(() => setQuantity(1), [max])
  const incrementQty = (e) => {
    e.preventDefault()
    setQuantity(quantity >= max ? max : quantity + 1)
  }
  const decrementQty = (e) => {
    e.preventDefault()
    setQuantity(quantity <= 1 ? 1 : quantity - 1)
  }
  const setQty = (e) => {
    let qty = parseInt(e.target.value)
    if (qty > max) qty = max
    if (qty < 1) qty = 1
    setQuantity(qty)
  }
  return { quantity, incrementQty, decrementQty, setQty }
}
export default useQuantity
