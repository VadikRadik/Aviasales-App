import Logo from '../logo'
import TransfersFilter from '../transfers-filter'
import OptimalFilter from '../optimal-filter'
import MoreButton from '../more-button'
import TicketCard from '../ticket-card'

import classes from './aviasales-app.module.scss'

const AviasalesApp = () => {
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
          <TicketCard className={classes['aviasales-app__ticket-card']} />
          <TicketCard className={classes['aviasales-app__ticket-card']} />
          <TicketCard className={classes['aviasales-app__ticket-card']} />
          <TicketCard className={classes['aviasales-app__ticket-card']} />
          <TicketCard className={classes['aviasales-app__ticket-card']} />
          <MoreButton className={classes['aviasales-app__more-button']} />
        </div>
      </div>
    </div>
  )
}

export default AviasalesApp
