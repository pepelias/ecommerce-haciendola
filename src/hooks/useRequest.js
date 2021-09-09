import { useEffect, useState } from 'react'
import requestApi from '../helpers/requestApi'

const useRequest = ({ endpoint, defaultValue = [] }) => {
  const [registers, setRegisters] = useState(defaultValue)
  const [error, setError] = useState()
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    if (!endpoint) return false
    setLoader(true)
    requestApi(endpoint)
      .then((result) => {
        setRegisters(result)
        setLoader(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoader(false)
      })
  }, [endpoint])

  return [registers, error, loader]
}

export default useRequest
