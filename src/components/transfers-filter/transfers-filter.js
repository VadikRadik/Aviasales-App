import classes from './transfers-filter.module.scss'

const TransfersFilter = (props) => {
  return <div className={`${classes['transfers-filter']} ${props.className}`}></div>
}

export default TransfersFilter
