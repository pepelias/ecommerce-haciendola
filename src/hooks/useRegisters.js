import { useEffect, useState } from 'react'

const useRegisters = (endpoint) => {
  const [registers, setRegisters] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    if (!endpoint) return false
    fetch(process.env.REACT_APP_API + endpoint)
      .then((res) => res.json())
      .then((result) => setRegisters(result))
      .catch((err) => setError(err))
  }, [endpoint])

  return [registers, error]
}

export default useRegisters
