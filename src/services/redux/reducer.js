import { OPTIMAL_PRICE, OPTIMAL_TIME, OPTIMAL } from './actions'

const initialState = {
  transfersFilter: {
    checks: [false, false, false, false, false],
  },
  optimalFilterValue: OPTIMAL_PRICE,
  tickets: [],
  isLoading: false,
  error: null,
}

const reducer = (state, action) => {
  if (state === undefined) {
    return initialState
  }

  // todo named constant to actions
  switch (action.type) {
    case 'OPTIMAL_PRICE':
      return {
        ...state,
        optimalFilterValue: OPTIMAL_PRICE,
      }
    case 'OPTIMAL_TIME':
      return {
        ...state,
        optimalFilterValue: OPTIMAL_TIME,
      }
    case 'OPTIMAL':
      return {
        ...state,
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

        // checkbox all is checked only if all checkboxes are checked
        const otherChecks = newChecks.slice(1)
        newChecks[0] = otherChecks.every((check) => check === true)
      }

      return {
        ...state,
        transfersFilter: { checks: newChecks },
      }
    }
    case 'GET_TICKETS_PROCESS':
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case 'GET_TICKETS_FAILED':
      console.log(action.error.message)
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    case 'GET_TICKETS_FINISHED':
      return {
        ...state,
        isLoading: false,
        tickets: action.tickets.slice(0, 5),
        error: null,
      }

    default:
      return state
  }
}

export default reducer
