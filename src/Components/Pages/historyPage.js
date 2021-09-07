import { useEffect, useState } from 'react'
import useRequest from '../../hooks/useRequest'
import ErrorMessage from '../Molecules/ErrorMessage'
import HistoryItem from '../Organisms/historyItem'
import HistoryDetail from '../Organisms/HistoryDetail'
import Loader from '../Molecules/Loader'

const HistoryPage = ({ match }) => {
  const [history, error] = useRequest({ endpoint: '/users/getOrders' })
  const [selected, setSelected] = useState()

  // Detectar seleccion
  useEffect(() => {
    if (!match.params.id) return setSelected(undefined)
    setSelected(
      history.find(({ orderId }) => orderId === parseInt(match.params.id))
    )
  }, [match, history])

  if (!history.length && !error)
    return <Loader>Cargando su historial de pedidos</Loader>
  return (
    <div className="dual-container">
      <section className="dual-container__section">
        <h1>Historial de pedidos:</h1>
        {error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : (
          <ul className="history-list">
            {history.map((item, i) => (
              <HistoryItem key={i} {...item} selected={selected?.orderId} />
            ))}
          </ul>
        )}
      </section>
      <section className="dual-container__section">
        {selected && <HistoryDetail {...selected} />}
      </section>
    </div>
  )
}

export default HistoryPage
