const OPTIMAL_PRICE = 0
const OPTIMAL_TIME = 1
const OPTIMAL = 2

const price = () => ({ type: 'OPTIMAL_PRICE' })
const time = () => ({ type: 'OPTIMAL_TIME' })
const optimal = () => ({ type: 'OPTIMAL' })

const toggleTransfer = (event, index) => ({
  type: 'TOGGLE_TRANSFER',
  checkBoxIndex: index,
  checked: event.target.checked,
})

export const testAsyncAction = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(() => {
        console.log('test action called')
      })
    }, 5000)
  }
}

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
    fetch('https://aviasales-test-api.kata.academy/tickets?searchId=9c4df5fcac3cac418fa6ef6861a91cbb')
      .then((response) => {
        if (response.ok) {
          return response.json()
          //dispatch(() => getTicketsFinished(response.json().tickets))
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

export { price, time, optimal, toggleTransfer, OPTIMAL_PRICE, OPTIMAL_TIME, OPTIMAL }
