import classes from './spinner.module.scss'

const Spinner = ({ className }) => {
  return (
    <div className={`${classes.spinner} ${className}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Spinner
