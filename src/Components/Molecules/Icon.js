const Icon = ({ icon, children }) => (
  <>
    <i className={`im im-${icon}`}></i>
    {children && <span>{children}</span>}
  </>
)

export default Icon
