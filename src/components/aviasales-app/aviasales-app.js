import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useEffect } from 'react'

import Logo from '../logo'
import TransfersFilter from '../transfers-filter'
import OptimalFilter from '../optimal-filter'
import MoreButton from '../more-button'
import TicketCard from '../ticket-card'
import Spinner from '../spinner/spinner'
import { getTicketsProcessStart, getTicketsBatch } from '../../services/redux/actions'

import classes from './aviasales-app.module.scss'

const AviasalesApp = ({ startLoadingTickets, loadTickets, filteredTickets, isLoading, showTickets }) => {
  useEffect(() => {
    startLoadingTickets()
    loadTickets()
  }, [])

  const tickets = filteredTickets ? filteredTickets.slice(0, showTickets) : []
  const ticketsListContent = isLoading ? (
    <Spinner className={classes['aviasales-app__tickets-layout-spinner']} />
  ) : (
    tickets.map((ticket) => {
      return (
        <TicketCard
          key={`${ticket.carrier}-${ticket.segments[0].destination}-${ticket.segments[0].origin}-${ticket.segments[0].date}`}
          className={classes['aviasales-app__ticket-card']}
          price={ticket.price}
          carrier={ticket.carrier}
          infoSegmentForward={ticket.segments[0]}
          infoSegmentBack={ticket.segments[1]}
        />
      )
    })
  )
  const moreButton =
    filteredTickets && showTickets < filteredTickets.length ? (
      <MoreButton className={classes['aviasales-app__more-button']} onClick={() => {}} />
    ) : null
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
          {moreButton}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filteredTickets: state.filteredTickets,
    isLoading: state.isNothingToShow,
    //error: state.error,
    showTickets: state.showTickets,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startLoadingTickets: bindActionCreators(getTicketsProcessStart, dispatch),
    loadTickets: bindActionCreators(getTicketsBatch, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AviasalesApp)
