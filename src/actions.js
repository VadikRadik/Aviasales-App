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

export { price, time, optimal, toggleTransfer, OPTIMAL_PRICE, OPTIMAL_TIME, OPTIMAL }
