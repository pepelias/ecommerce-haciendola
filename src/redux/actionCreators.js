import * as actions from './actions'

export const addToCart = (product) => (dispatch) => {
  dispatch({ type: actions.ADD_TO_CART, data: product })
}
export const removeFromCart = (productHandle) => (dispatch) => {
  dispatch({ type: actions.REMOVE_FROM_CART, data: productHandle })
}
