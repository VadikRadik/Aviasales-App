import classes from './optimal-filter.module.scss'

const OptimalFilter = () => {
  return (
    <div className={classes['optimal-filter']}>
      <div className={`${classes['optimal-filter__item']} ${classes['optimal-filter__item--selected']}`}>
        Самый дешевый
      </div>
      <div className={classes['optimal-filter__item']}>Самый быстрый</div>
      <div className={classes['optimal-filter__item']}>Оптимальный</div>
    </div>
  )
}

export default OptimalFilter
