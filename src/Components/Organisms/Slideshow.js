import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Assets from '../../assets/import'
import Icon from '../Molecules/Icon'

const DEFAULT_SLIDES = []

const Slide = ({ handle }) => {
  const img = Assets(`./slides/${handle}.png`)
  const to = `/colecciones/${handle}`
  return (
    <div className="slideshow--slide">
      <Link to={to}>
        <img src={img} alt={handle} className="slideshow--slide__img" />
        <div className="slideshow--slide__content">
          <h1>{handle}</h1>
        </div>
      </Link>
    </div>
  )
}

const Slideshow = ({ slides = DEFAULT_SLIDES }) => {
  const container = useRef()
  const mainContainer = useRef()
  const animation = 4000
  let timeout = setTimeout(() => next(), animation)

  const next = () => {
    if (timeout) clearTimeout(timeout)
    if (!container.current || container.current.childNodes.length === 0)
      return false
    container.current.classList.add('next')
  }
  const previous = () => {
    if (timeout) clearTimeout(timeout)
    if (!container.current || container.current.childNodes.length === 0)
      return false
    container.current.prepend(container.current.lastChild)
    container.current.classList.add('previous')
  }
  const animationEnd = (e) => {
    if (e.target !== container.current) return false
    mainContainer.current.classList.remove('animation')
    // Fue al siguiente
    if (container.current.classList.contains('next')) {
      container.current.appendChild(container.current.firstElementChild)
    }
    container.current.classList.remove('next', 'previous')
    timeout = setTimeout(() => next(), animation)
  }
  const animationStart = (e) => {
    if (e.target !== container.current) return false
    mainContainer.current.classList.add('animation')
  }
  return (
    <div className="slideshow" ref={mainContainer}>
      <div
        className="slideshow__slides"
        ref={container}
        onAnimationEnd={animationEnd}
        onAnimationStart={animationStart}
      >
        {slides.map((s) => (
          <Slide key={s.handle} {...s} />
        ))}
      </div>
      <div className="slideshow__controls">
        <button onClick={previous}>
          <Icon icon="angle-left" />
        </button>
        <button onClick={next}>
          <Icon icon="angle-right" />
        </button>
      </div>
    </div>
  )
}
export default Slideshow
