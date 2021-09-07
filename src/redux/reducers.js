import * as actions from './actions'
import Store from '../helpers/storager'

const DEFAULT_CART = Store.get(actions.CART_STORE, [])
const DEFAULT_SESSION = Store.get(actions.SESSION_STORE, false)

export const cart = (state = DEFAULT_CART, { type, data }) => {
  const addToCart = () => {
    const index = state.findIndex(
      ({ product }) => product.handle === data.product.handle
    )
    if (index === -1) return Store.set(actions.CART_STORE, [...state, data])
    const update = state[index]
    const updated = { ...update, quantity: update.quantity + data.quantity }
    return Store.set(
      actions.CART_STORE,
      state.map((itm, i) => (i === index ? updated : itm))
    )
  }
  switch (type) {
    case actions.ADD_TO_CART:
      return addToCart()
    case actions.REMOVE_FROM_CART:
      return Store.set(
        actions.CART_STORE,
        state.filter(({ product }) => product.handle !== data)
      )
    default:
      return state
  }
}

export const collections = (state = [], { type, data }) => {
  switch (type) {
    case actions.SET_COLLECTIONS:
      return data
    default:
      return state
  }
}

export const session = (state = DEFAULT_SESSION, { type, data }) => {
  switch (type) {
    case actions.LOGIN:
      return Store.set(actions.SESSION_STORE, data)
    case actions.LOGOUT:
      Store.remove(actions.SESSION_STORE)
      return false
    default:
      return state
  }
}
