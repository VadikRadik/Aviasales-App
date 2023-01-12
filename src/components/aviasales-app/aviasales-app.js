import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Logo from '../logo'
import TransfersFilter from '../transfers-filter'
import OptimalFilter from '../optimal-filter'
import MoreButton from '../more-button'
import TicketCard from '../ticket-card'
import Spinner from '../spinner/spinner'
import { getTicketsProcessStart, getTickets } from '../../services/redux/actions'

import classes from './aviasales-app.module.scss'

const AviasalesApp = ({ onStartGetTickets, onGetTickets, tickets, isLoading, error }) => {
  const ticketsListContent =
    isLoading || error ? (
      <Spinner className={classes['aviasales-app__tickets-layout-spinner']} />
    ) : (
      tickets.map((ticket) => {
        return (
          <TicketCard
            key={`${ticket.carrier}-${ticket.segments[0].destination}-${ticket.segments[0].origin}-${ticket.date}`}
            className={classes['aviasales-app__ticket-card']}
            price={ticket.price}
            infoSegmentForward={ticket.segments[0]}
            infoSegmentBack={ticket.segments[1]}
          />
        )
      })
    )
  return (
    <div className={classes['aviasales-app']}>
      <Logo className={classes['aviasales-app__logo']} />
      <div className={classes['aviasales-app__desctop-layout']}>
        <TransfersFilter className={classes['aviasales-app__transfers-filter']} />
        <div className={classes['aviasales-app__tickets-layout']}>
          <div className={classes['aviasales-app__mobile-filters-layout']}>
            <TransfersFilter className={classes['aviasales-app__transfers-filter--mobile']} />
            <OptimalFilter />
          </div>
          {ticketsListContent}
          <MoreButton
            className={classes['aviasales-app__more-button']}
            onClick={() => {
              onStartGetTickets()
              onGetTickets()
            }}
          />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
    isLoading: state.isLoading,
    error: state.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //ticketsLoader: bindActionCreators(() => {
    //  getTicketsProcessStart()
    //  getTickets()
    //}, dispatch),
    onStartGetTickets: bindActionCreators(getTicketsProcessStart, dispatch),
    onGetTickets: bindActionCreators(getTickets, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AviasalesApp)
