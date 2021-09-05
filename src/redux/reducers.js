import * as actions from './actions'

export const cart = (state = [], { type, data }) => {
  const addToCart = () => {
    const index = state.findIndex(
      ({ product }) => product.handle === data.product.handle
    )
    if (index === -1) return [...state, data]
    const update = state[index]
    const updated = { ...update, quantity: update.quantity + data.quantity }
    return state.map((itm, i) => (i === index ? updated : itm))
  }
  switch (type) {
    case actions.ADD_TO_CART:
      return addToCart()
    default:
      return state
  }
}
