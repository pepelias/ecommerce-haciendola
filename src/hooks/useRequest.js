import { useEffect, useState } from 'react'
import requestApi from '../helpers/requestApi'

const useRequest = ({ endpoint, defaultValue = [] }) => {
  const [registers, setRegisters] = useState(defaultValue)
  const [error, setError] = useState()

  useEffect(() => {
    if (!endpoint) return false
    requestApi(endpoint)
      .then((result) => setRegisters(result))
      .catch((err) => {
        setError(err.message)
      })
  }, [endpoint])

  return [registers, error]
}

export default useRequest
