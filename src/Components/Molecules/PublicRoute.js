import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

const PublicRoute = (params) => {
  const logged = useSelector(({ session }) => session)
  if (logged) return <Redirect to="/historial" />
  return <Route {...params} />
}

export default PublicRoute
