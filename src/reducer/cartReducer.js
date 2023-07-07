export const cartInitalState = []

export const CART_ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
}

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART:
      if (state.some((item) => item.id === action.payload.id)) {
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            }
          }
          return item
        })
      } else {
        return [
          ...state,
          {
            ...action.payload,
            quantity: 1,
          },
        ]
      }
    case CART_ACTIONS.REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload.id)

    case CART_ACTIONS.CLEAR_CART:
      return cartInitalState
    default:
      return state
  }
}