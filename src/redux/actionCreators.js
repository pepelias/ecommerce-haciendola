import * as actions from './actions'

export const addToCart = (product) => ({
  type: actions.ADD_TO_CART,
  data: product,
})

export const removeFromCart = (productHandle) => ({
  type: actions.REMOVE_FROM_CART,
  data: productHandle,
})

export const setCollections = (collections) => ({
  type: actions.SET_COLLECTIONS,
  data: collections,
})

export const signIn = (jwt) => ({ type: actions.LOGIN, data: jwt })

export const signOut = () => ({ type: actions.LOGOUT })
