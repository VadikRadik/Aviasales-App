import { OPTIMAL_PRICE, OPTIMAL_TIME, OPTIMAL, ALL_TICKETS_COUNT } from './actions'

const initialState = {
  transfersFilter: {
    checks: [false, false, false, false, false],
  },
  optimalFilterValue: OPTIMAL_PRICE,
  tickets: [],
  isNothingToShow: true,
  error: null,
  ticketsLoadingProgress: 0,
  showTickets: 5,
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
    case 'GET_TICKETS_PROCESS_STARTED':
      return {
        ...state,
        isNothingToShow: true,
        error: null,
        ticketsLoadingProgress: 0,
      }
    case 'GET_TICKETS_FAILED':
      console.log(action.error.message)
      return {
        ...state,
        error: action.error,
      }
    case 'GET_TICKETS_FINISHED': {
      const newTickets = [...state.tickets, ...action.tickets]
      console.log(100)
      return {
        ...state,
        tickets: newTickets,
        error: null,
        ticketsLoadingProgress: 100,
      }
    }
    case 'GET_TICKETS_BATCH_GOT': {
      const newTickets = [...state.tickets, ...action.tickets]
      const newProgress = state.ticketsLoadingProgress + (100 * action.tickets.length) / ALL_TICKETS_COUNT
      console.log(newProgress)
      return {
        ...state,
        isNothingToShow: false,
        tickets: newTickets,
        error: null,
        ticketsLoadingProgress: newProgress,
      }
    }

    default:
      return state
  }
}

export default reducer
