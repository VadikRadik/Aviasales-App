import TicketsApi from '../api/tickets-api.js'

const ticketsApi = new TicketsApi()

export const OPTIMAL_PRICE = 0
export const OPTIMAL_TIME = 1
export const OPTIMAL = 2

export const price = () => ({ type: 'OPTIMAL_PRICE' })
export const time = () => ({ type: 'OPTIMAL_TIME' })
export const optimal = () => ({ type: 'OPTIMAL' })

export const optimalFilter = (switchedFilter) => ({ type: 'OPTIMAL_FILTER', switchedFilter })

export const ALL_TICKETS_COUNT = 10000

export const toggleTransfer = (event, index) => ({
  type: 'TOGGLE_TRANSFER',
  checkBoxIndex: index,
  checked: event.target.checked,
})

export const getTicketsProcessStart = () => ({ type: 'GET_TICKETS_PROCESS_STARTED' })

export const getTicketsFailed = (error) => {
  return {
    type: 'GET_TICKETS_FAILED',
    error,
  }
}

export const getTicketsFinished = (tickets) => ({
  type: 'GET_TICKETS_FINISHED',
  tickets,
})

export const ticketsBatchGot = (tickets) => ({
  type: 'GET_TICKETS_BATCH_GOT',
  tickets,
})

export const getTicketsBatch = () => {
  return (dispatch) => {
    ticketsApi.getTicketsBatch(
      (result) => {
        if (result.stop) {
          dispatch(getTicketsFinished(result.tickets))
        } else {
          dispatch(ticketsBatchGot(result.tickets))
          setTimeout(() => {
            dispatch(getTicketsBatch())
          }, 1000)
        }
      },
      (status) => {
        dispatch(getTicketsFailed(new Error(`Unable to fetch tickets, responce status: ${status}`)))
        setTimeout(() => {
          dispatch(getTicketsBatch())
        }, 2500)
      },
      (error) => {
        dispatch(getTicketsFailed(new Error(`Unable to fetch tickets, error: ${error}`)))
      }
    )
  }
}
