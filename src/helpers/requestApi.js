import Store from './storager'
import { SESSION_STORE } from './../redux/actions'

const requestApi = async (endpoint, config = {}) => {
  const token = Store.get(SESSION_STORE, false)
  if (!config.headers) config.headers = {}
  if (config.body) config.body = JSON.stringify(config.body)
  config.headers = {
    ...config.headers,
    'content-type': 'application/json',
    authorization: token ? `Bearer ${token}` : '',
  }
  try {
    const req = await fetch(process.env.REACT_APP_API + endpoint, config)
    const type = req.headers.get('content-type')
    const res = type ? await req.json() : null
    if (!req.ok || res === null)
      throw res || Error('No podemos acceder a este recurso')
    return res
  } catch (err) {
    console.error(err)
    throw err
  }
}
export default requestApi
