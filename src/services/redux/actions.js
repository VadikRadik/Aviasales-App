export const OPTIMAL_PRICE = 0
export const OPTIMAL_TIME = 1
export const OPTIMAL = 2

export const price = () => ({ type: 'OPTIMAL_PRICE' })
export const time = () => ({ type: 'OPTIMAL_TIME' })
export const optimal = () => ({ type: 'OPTIMAL' })

export const toggleTransfer = (event, index) => ({
  type: 'TOGGLE_TRANSFER',
  checkBoxIndex: index,
  checked: event.target.checked,
})

export const getTicketsProcessStart = () => ({ type: 'GET_TICKETS_PROCESS' })

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

export const getTickets = () => {
  return (dispatch) => {
    fetch('https://aviasales-test-api.kata.academy/tickets?searchId=d5c491070ed9410465f2c2c637a03b53')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          dispatch(getTicketsFailed(new Error(`Unable to fetch tickets, responce status: ${response.status}`)))
        }
      })
      .then((result) => {
        dispatch(getTicketsFinished(result.tickets))
      })
      .catch((error) => {
        dispatch(getTicketsFailed(new Error(`Unable to fetch tickets, error: ${error}`)))
      })
  }
}
