import Checkbox from '../checkbox/checkbox'

import classes from './transfers-filter.module.scss'

const TransfersFilter = (props) => {
  return (
    <div className={`${classes['transfers-filter']} ${props.className}`}>
      <div className={classes['transfers-filter__list']}>
        <span className={classes['transfers-filter__list-label']}>Количество пересадок</span>
        <div className={classes['transfers-filter__list-item']}>
          <Checkbox label="Все" focused />
        </div>
        <div className={`${classes['transfers-filter__list-item']} ${classes['transfers-filter__list-item--focused']}`}>
          <Checkbox label="Без пересадок" focused />
        </div>
        <div className={classes['transfers-filter__list-item']}>
          <Checkbox label="1 пересадка" checked />
        </div>
        <div className={classes['transfers-filter__list-item']}>
          <Checkbox label="2 пересадки" focused />
        </div>
        <div className={classes['transfers-filter__list-item']}>
          <Checkbox label="3 пересадки" />
        </div>
      </div>
    </div>
  )
}

export default TransfersFilter
