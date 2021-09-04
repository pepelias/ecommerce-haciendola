const Loader = ({ children }) => {
  return (
    <div className="loader">
      <div className="loader__animation"></div>
      {children && <span className="loader__content">{children}</span>}
    </div>
  )
}
export default Loader
