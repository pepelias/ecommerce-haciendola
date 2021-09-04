import bannerImage from '../../assets/banner.jpg'

const Banner = () => {
  return (
    <section className="main-banner">
      <div className="main-banner__img">
        <img src={bannerImage} alt="Ciro alfombras Logo" />
      </div>
      <div className="main-banner__container">
        <h1>Elegancia y confort</h1>
      </div>
    </section>
  )
}
export default Banner
