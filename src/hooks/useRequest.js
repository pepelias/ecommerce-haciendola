import { useEffect, useState } from 'react'

const useRequest = ({ endpoint, defaultValue = [] }) => {
  const [registers, setRegisters] = useState(defaultValue)
  const [error, setError] = useState()

  useEffect(() => {
    if (!endpoint) return false
    console.log('Cargando:', process.env.REACT_APP_API + endpoint)
    fetch(process.env.REACT_APP_API + endpoint)
      .then((res) => res.json())
      .then((result) => setRegisters(result))
      .catch((err) => setError(err))
  }, [endpoint])

  return [registers, error]
}

export default useRequest
