import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

const PrivateRoute = (params) => {
  const logged = useSelector(({ session }) => session)
  if (!logged) return <Redirect to="/login" />
  return <Route {...params} />
}

export default PrivateRoute
