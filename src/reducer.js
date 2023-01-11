import { OPTIMAL_PRICE, OPTIMAL_TIME, OPTIMAL } from './actions'

const initialState = {
  transfersFilter: {
    checks: [false, false, false, false, false],
  },
  optimalFilterValue: OPTIMAL_PRICE,
}

const reducer = (state, action) => {
  if (state === undefined) {
    return initialState
  }

  // todo named constant to actions
  switch (action.type) {
    case 'OPTIMAL_PRICE':
      return {
        transfersFilter: { checks: [...state.transfersFilter.checks] },
        optimalFilterValue: OPTIMAL_PRICE,
      }
    case 'OPTIMAL_TIME':
      return {
        transfersFilter: { checks: [...state.transfersFilter.checks] },
        optimalFilterValue: OPTIMAL_TIME,
      }
    case 'OPTIMAL':
      return {
        transfersFilter: { checks: [...state.transfersFilter.checks] },
        optimalFilterValue: OPTIMAL,
      }
    case 'TOGGLE_TRANSFER': {
      let newChecks = [...state.transfersFilter.checks]
      newChecks[action.checkBoxIndex] = action.checked
      return {
        ...state,
        transfersFilter: { checks: newChecks },
      }
    }

    default:
      return state
  }
}

export default reducer
