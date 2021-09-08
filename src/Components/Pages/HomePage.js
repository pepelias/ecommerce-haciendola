import { useSelector } from 'react-redux'
import Image from '../Molecules/Image'
import BestSellers from '../Organisms/BestSellers'
import Slideshow from '../Organisms/Slideshow'

const HomePage = () => {
  const collections = useSelector(({ collections }) => collections)
  return (
    <>
      <Slideshow slides={collections} />
      <section className="margin-b-2">
        <h1 className="align-center margin-0">Lo más vendido:</h1>
        <BestSellers />
      </section>
      <section>
        <h1 className="align-center s-margin-b-05 m-margin-b">Conócenos:</h1>
        <div className="lg-grid-container s-padding-0 m-padding m-to-middle">
          <Image
            src="./about-us.jpg"
            alt="Ciro Alformbras"
            className="s-undecored m-decored m-fr-w-75 lg-fr-w margin-x-auto"
          />
          <section className="s-padding s-padding-y-2 s-padding-y-3 align-center">
            <h2 className="s-margin-y-0">Acerca de nosotros:</h2>
            <p className="m-fr-w-75 margin-bottom margin-x-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              tempor scelerisque leo non eleifend. Integer gravida diam eu nunc
              consequat ultricies.
            </p>
            <p className="m-fr-w-75 margin-x-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              tempor scelerisque leo non eleifend. Integer gravida diam eu nunc
              consequat ultricies.
            </p>
          </section>
        </div>
      </section>
    </>
  )
}

export default HomePage
