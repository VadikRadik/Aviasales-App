import classes from './more-button.module.scss'

const MoreButton = (props) => {
  return <button className={`${classes['more-button']} ${props.className}`}>Показать ещё 5 билетов!</button>
}

export default MoreButton
