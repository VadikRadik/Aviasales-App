import classes from './more-button.module.scss'

const MoreButton = (props) => {
  return <div className={`${classes['more-button']} ${props.className}`}>Показать ещё 5 билетов!</div>
}

export default MoreButton
