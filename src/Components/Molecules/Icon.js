const Icon = ({ icon, children }) => (
  <>
    <span className="material-icons">{icon}</span>
    {children && <span>{children}</span>}
  </>
)

export default Icon
