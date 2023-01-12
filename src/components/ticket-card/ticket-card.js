import CardInfo from '../card-info/card-info'

import classes from './ticket-card.module.scss'

const TicketCard = ({ className, price, infoSegmentForward, infoSegmentBack }) => {
  const firstLineTimeHead = `${infoSegmentForward.origin} - ${infoSegmentForward.destination}`
  const stopsForward = infoSegmentForward.stops.join(', ')
  const secondLineTimeHead = `${infoSegmentBack.origin} - ${infoSegmentBack.destination}`
  const stopsBack = infoSegmentBack.stops.join(', ')
  return (
    <div className={`${classes['ticket-card']} ${className}`}>
      <div className={classes['ticket-card__head']}>
        <div className={classes['ticket-card__price']}>{`${price.toLocaleString()} ₽`}</div>
        <div className={classes['ticket-card__logo']}></div>
      </div>
      <div className={classes['ticket-card__info-row']}>
        <CardInfo className={classes['ticket-card__info-row-item']} label={firstLineTimeHead} info="10:45 – 08:00" />
        <CardInfo className={classes['ticket-card__info-row-item']} label="В пути" info="21ч 15м" />
        <CardInfo className={classes['ticket-card__info-row-item']} label="2 пересадки" info={stopsForward} />
      </div>
      <div className={classes['ticket-card__info-row']}>
        <CardInfo className={classes['ticket-card__info-row-item']} label={secondLineTimeHead} info="11:20 – 00:50" />
        <CardInfo className={classes['ticket-card__info-row-item']} label="В пути" info="13ч 30м" />
        <CardInfo className={classes['ticket-card__info-row-item']} label="1 пересадка" info={stopsBack} />
      </div>
    </div>
  )
}

export default TicketCard
