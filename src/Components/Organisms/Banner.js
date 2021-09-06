import Assets from '../../assets/import'

const DEFAULT_IMAGE = './banner.jpg'
const Banner = ({ img = DEFAULT_IMAGE, title, principal }) => {
  const image = Assets(img)
  return (
    <section className={`main-banner ${principal ? 'principal' : ''}`}>
      <div className="main-banner__img">
        <img src={image} alt="Ciro alfombras Logo" />
      </div>
      <div className="main-banner__container">
        <h1 className="main-banner__title">{title}</h1>
      </div>
    </section>
  )
}
export default Banner
