import { useCallback, useState } from 'react'
import requestApi from '../helpers/requestApi'

const useHistoryList = () => {
  const [history, setHistory] = useState([])
  const [error, setError] = useState()
  useCallback(() => {
    console.log('Cargando el historial')
    requestApi('/users/getOrders')
      .then((res) => {
        setHistory(res)
      })
      .catch((err) => setError(err))
  }, [])

  return [history, error]
}
export default useHistoryList
