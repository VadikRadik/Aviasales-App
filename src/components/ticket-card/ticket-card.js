import classes from './ticket-card.module.scss'

const TicketCard = (props) => {
  return <div className={`${classes['ticket-card']} ${props.className}`}></div>
}

export default TicketCard
