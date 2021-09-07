import useRequest from '../../hooks/useRequest'
import ErrorMessage from '../Molecules/ErrorMessage'
import Loader from '../Molecules/Loader'
import BestSeller from './BestSeller'
import Carousel from 'react-elastic-carousel'
import { useRef } from 'react'

const BestSellers = () => {
  const [products, error] = useRequest({
    endpoint: '/products/getBestSellers',
  })
  const duration = 3000
  const carousel = useRef()
  const breakPoints = [
    { width: 0, itemsToShow: 1, itemsToScroll: 1 },
    { width: 500, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 3, itemsToScroll: 1 },
    { width: 1200, itemsToShow: 4, itemsToScroll: 1 },
  ]

  const ended = ({ index }) => {
    if (!carousel.current) return false
    if (index !== carousel.current.getNextItemIndex()) return false
    setTimeout(() => {
      if (!carousel.current) return false
      carousel.current.goTo(0)
    }, duration)
  }

  if (error) return <ErrorMessage>{error}</ErrorMessage>
  if (products.length === 0) return <Loader>Cargando productos</Loader>
  return (
    <Carousel
      breakPoints={breakPoints}
      itemPadding={[5, 5, 5, 5]}
      enableAutoPlay={true}
      autoPlaySpeed={duration}
      onNextEnd={ended}
      ref={carousel}
    >
      {products.map((product, i) => (
        <BestSeller key={i} {...product} />
      ))}
    </Carousel>
  )
}
export default BestSellers
