import Assets from '../../assets/import'

const Image = ({ src, className, ...props }) => {
  const image = Assets(src)
  return (
    <div className={`image-container ${className || ''}`}>
      <img src={image} {...props} />
    </div>
  )
}
export default Image
