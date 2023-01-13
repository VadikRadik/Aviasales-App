import { useState, useEffect, React } from 'react'

import LogoSpinner from '../logo-spinner/logo-spinner'
import TicketInfo from '../ticket-info/'

import classes from './ticket-card.module.scss'

const useCarrierImage = (carrier) => {
  const [image, setImage] = useState(null)

  useEffect(() => {
    fetch(`https://pics.avs.io/99/36/${carrier}.png`)
      .then((res) => res.blob())
      .then((data) => setImage(URL.createObjectURL(data)))
  }, [])

  return image
}

const TicketCard = ({ className, price, carrier, infoSegmentForward, infoSegmentBack }) => {
  const image = useCarrierImage(carrier)

  const imageElement = image ? (
    <img className={classes['ticket-card__logo']} src={image} alt={`${carrier} лого`} />
  ) : (
    <LogoSpinner className={classes['ticket-card__logo']} />
  )

  return (
    <div className={`${classes['ticket-card']} ${className}`}>
      <div className={classes['ticket-card__head']}>
        <div className={classes['ticket-card__price']}>{`${price.toLocaleString()} ₽`}</div>
        {imageElement}
      </div>
      <TicketInfo segmentInfo={infoSegmentForward} />
      <TicketInfo segmentInfo={infoSegmentBack} />
    </div>
  )
}

export default TicketCard
