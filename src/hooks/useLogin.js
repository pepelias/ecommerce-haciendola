import { useState } from 'react'
import { useDispatch } from 'react-redux'
import requestApi from '../helpers/requestApi'
import { signIn } from '../redux/actionCreators'

const useLogin = () => {
  const [error, setError] = useState()
  const [loading, setLoading] = useState()
  const dispatch = useDispatch()
  const login = async ({ user, password }) => {
    setLoading(true)
    setError('')
    try {
      const req = await requestApi('/users/login', {
        method: 'post',
        body: { user, password },
      })
      dispatch(signIn(req.token))
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }
  return { login, error, loading }
}
export default useLogin
