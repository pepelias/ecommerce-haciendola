import useRequest from '../../hooks/useRequest'
import ErrorMessage from '../Molecules/ErrorMessage'
import Loader from '../Molecules/Loader'
import BestSeller from './BestSeller'
import Carousel from 'react-elastic-carousel'
import { useRef, useState } from 'react'

const BestSellers = () => {
  const [products, error] = useRequest({
    endpoint: '/products/getBestSellers',
  })
  const carousel = useRef()
  const [controls, setControls] = useState(true)
  const duration = 3000
  const breakPoints = [
    { width: 0, itemsToShow: 1, itemsToScroll: 1 },
    { width: 500, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 3, itemsToScroll: 2 },
    { width: 1200, itemsToShow: 5, itemsToScroll: 2 },
  ]

  const ended = ({ index }) => {
    if (index !== carousel.current.getNextItemIndex()) return false
    setTimeout(() => {
      if (!carousel.current) return false
      carousel.current.goTo(0)
    }, duration)
  }
  const resize = () => {
    const pages = carousel.current.getNumOfPages()
    if (pages === 1 && controls) setControls(false)
    if (pages > 1 && !controls) setControls(true)
  }

  if (error) return <ErrorMessage>{error}</ErrorMessage>
  if (products.length === 0) return <Loader>Cargando productos</Loader>
  return (
    <Carousel
      breakPoints={breakPoints}
      itemPadding={[0, 10, 0, 10]}
      enableAutoPlay={true}
      autoPlaySpeed={duration}
      onNextEnd={ended}
      onResize={resize}
      ref={carousel}
      showArrows={controls}
      pagination={controls}
    >
      {products.map((product, i) => (
        <BestSeller key={i} {...product} />
      ))}
    </Carousel>
  )
}
export default BestSellers
