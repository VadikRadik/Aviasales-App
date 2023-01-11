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

      const isToggledAll = action.checkBoxIndex === 0
      if (isToggledAll) {
        // checking checkbox all checks the others same
        newChecks = newChecks.fill(action.checked)
      } else {
        // others checkboxes check only themselfs
        newChecks[action.checkBoxIndex] = action.checked
        const otherChecks = newChecks.slice(1)
        // checkbox all is checked only if all checkboxes are checked
        if (otherChecks.every((check) => check === true)) {
          newChecks[0] = true
        } else {
          newChecks[0] = false
        }
      }

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
