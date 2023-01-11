const initialState = 0

const reducer = (state, action) => {
  if (state === undefined) {
    return initialState
  }

  // todo named constant to actions
  switch (action.type) {
    case 'OPTIMAL_PRICE':
      return 0
    case 'OPTIMAL_TIME':
      return 1
    case 'OPTIMAL':
      return 2
    default:
      return state
  }
}

export default reducer
