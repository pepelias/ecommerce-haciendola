import { useSelector } from 'react-redux'
import BestSellers from '../Organisms/BestSellers'
import Slideshow from '../Organisms/Slideshow'

const HomePage = () => {
  const collections = useSelector(({ collections }) => collections)
  return (
    <>
      <Slideshow slides={collections} />
      <section className="container">
        <h1 className="align-center">Lo más vendido:</h1>
        <BestSellers />
      </section>
    </>
  )
}

export default HomePage
