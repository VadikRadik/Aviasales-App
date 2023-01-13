import { add, format } from 'date-fns'

import CardInfo from '../card-info/card-info'

import classes from './ticket-info.module.scss'

const TicketInfo = ({ segmentInfo }) => {
  const date = new Date(segmentInfo.date)
  const stopsCount = segmentInfo.stops.length
  const timeHead = `${segmentInfo.origin} - ${segmentInfo.destination}`
  const stops = stopsCount ? segmentInfo.stops.join(', ') : '-'
  const startFinishTime = `${format(date, 'HH:mm')} - ${format(add(date, { minutes: segmentInfo.duration }), 'HH:mm')}`
  const travelTime = `${Math.trunc(segmentInfo.duration / 60)}ч ${segmentInfo.duration % 60}м`
  let transferLabel = `${stopsCount} пересад`
  if (stopsCount === 1) {
    transferLabel += 'ка'
  } else if (stopsCount > 1 && stopsCount < 5) {
    transferLabel += 'ки'
  } else {
    transferLabel += 'ок'
  }

  return (
    <div className={classes['ticket-card__info-row']}>
      <CardInfo className={classes['ticket-card__info-row-item']} label={timeHead} info={startFinishTime} />
      <CardInfo className={classes['ticket-card__info-row-item']} label="В пути" info={travelTime} />
      <CardInfo className={classes['ticket-card__info-row-item']} label={transferLabel} info={stops} />
    </div>
  )
}

export default TicketInfo
