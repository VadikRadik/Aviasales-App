import classes from './card-info.module.scss'

const CardInfo = (props) => {
  return (
    <div className={`${classes['card-info']} ${props.className}`}>
      <div className={classes['card-info__label']}>{props.label}</div>
      <div className={classes['card-info__info']}>{props.info}</div>
    </div>
  )
}

export default CardInfo
