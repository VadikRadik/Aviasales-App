import { OPTIMAL_PRICE, OPTIMAL_TIME, OPTIMAL, ALL_TICKETS_COUNT } from './actions'

const INITIAL_SHOW_TICKETS_COUNT = 5
//const SHOW_TICKETS_INCREMENET = 5

const initialState = {
  transfersFilter: {
    checks: [false, false, false, false, false],
  },
  optimalFilterValue: OPTIMAL_PRICE,
  tickets: [],
  filteredTickets: [],
  isNothingToShow: true,
  error: null,
  ticketsLoadingProgress: 0,
  showTickets: INITIAL_SHOW_TICKETS_COUNT,
}

const filterTicketsByTransfers = (tickets, transfers) => {
  return tickets.filter((ticket) => {
    const noTransfersCondition = ticket.segments[0].stops.length === 0 || ticket.segments[1].stops.length === 0
    const oneTransfersCondition = ticket.segments[0].stops.length === 1 || ticket.segments[1].stops.length === 1
    const twoTransfersCondition = ticket.segments[0].stops.length === 2 || ticket.segments[1].stops.length === 2
    const threeTransfersCondition = ticket.segments[0].stops.length === 3 || ticket.segments[1].stops.length === 3
    return (
      (transfers[1] && noTransfersCondition) ||
      (transfers[2] && oneTransfersCondition) ||
      (transfers[3] && twoTransfersCondition) ||
      (transfers[4] && threeTransfersCondition)
    )
  })
}

const filter = (allTickets, optimal, transfers) => {
  const isAllTransfers = transfers.every((check) => check === false)
  const transfersFiltered = isAllTransfers ? [...allTickets] : filterTicketsByTransfers(allTickets, transfers)
  switch (optimal) {
    case OPTIMAL_PRICE:
      return transfersFiltered.sort((a, b) => a.price - b.price)
    case OPTIMAL_TIME:
      return transfersFiltered.sort((a, b) => {
        return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
      })
    case OPTIMAL:
      return transfersFiltered.sort((a, b) => {
        return (
          a.price / 100000 +
          (a.segments[0].duration + a.segments[1].duration) / 3000 -
          (b.price / 100000 + (b.segments[0].duration + b.segments[1].duration) / 3000)
        )
      })
    default:
      break
  }
}

const reducer = (state, action) => {
  if (state === undefined) {
    return initialState
  }

  // todo named constant to actions
  switch (action.type) {
    case 'OPTIMAL_FILTER': {
      const newFilteredTickets = filter(state.tickets, action.switchedFilter, state.transfersFilter.checks)
      return {
        ...state,
        optimalFilterValue: action.switchedFilter,
        showTickets: INITIAL_SHOW_TICKETS_COUNT,
        filteredTickets: newFilteredTickets,
      }
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

      const newFilteredTickets = filter(state.tickets, state.optimalFilterValue, newChecks)

      return {
        ...state,
        transfersFilter: { checks: newChecks },
        showTickets: INITIAL_SHOW_TICKETS_COUNT,
        filteredTickets: newFilteredTickets,
      }
    }
    case 'GET_TICKETS_PROCESS_STARTED':
      return {
        ...state,
        isNothingToShow: true,
        error: null,
        ticketsLoadingProgress: 0,
        tickets: [],
        filteredTickets: [],
      }
    case 'GET_TICKETS_FAILED':
      console.log(action.error.message)
      return {
        ...state,
        error: action.error,
      }
    case 'GET_TICKETS_FINISHED': {
      const newTickets = [...state.tickets, ...action.tickets]
      const newFilteredTickets = filter(newTickets, state.optimalFilterValue, state.transfersFilter.checks)

      return {
        ...state,
        tickets: newTickets,
        error: null,
        ticketsLoadingProgress: 100,
        filteredTickets: newFilteredTickets,
      }
    }
    case 'GET_TICKETS_BATCH_GOT': {
      const newTickets = [...state.tickets, ...action.tickets]
      const newProgress = state.ticketsLoadingProgress + (100 * action.tickets.length) / ALL_TICKETS_COUNT
      const newFilteredTickets = filter(newTickets, state.optimalFilterValue, state.transfersFilter.checks)
      return {
        ...state,
        isNothingToShow: false,
        tickets: newTickets,
        error: null,
        ticketsLoadingProgress: newProgress > 100 ? 100 : newProgress,
        filteredTickets: newFilteredTickets,
      }
    }

    default:
      return state
  }
}

export default reducer
