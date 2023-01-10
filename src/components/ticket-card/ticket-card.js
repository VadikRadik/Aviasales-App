import CardInfo from '../card-info/card-info'

import classes from './ticket-card.module.scss'

const TicketCard = (props) => {
  return (
    <div className={`${classes['ticket-card']} ${props.className}`}>
      <div className={classes['ticket-card__head']}>
        <div className={classes['ticket-card__price']}>13 600 ₽</div>
        <div className={classes['ticket-card__logo']}></div>
      </div>
      <div className={classes['ticket-card__info-row']}>
        <CardInfo className={classes['ticket-card__info-row-item']} label="MOW – HKT" info="10:45 – 08:00" />
        <CardInfo className={classes['ticket-card__info-row-item']} label="В пути" info="21ч 15м" />
        <CardInfo className={classes['ticket-card__info-row-item']} label="2 пересадки" info="HKG, JNB" />
      </div>
      <div className={classes['ticket-card__info-row']}>
        <CardInfo className={classes['ticket-card__info-row-item']} label="MOW – HKT" info="11:20 – 00:50" />
        <CardInfo className={classes['ticket-card__info-row-item']} label="В пути" info="13ч 30м" />
        <CardInfo className={classes['ticket-card__info-row-item']} label="1 пересадка" info="HKG, JNB" />
      </div>
    </div>
  )
}

export default TicketCard
