import classes from './logo-spinner.module.scss'

const LogoSpinner = ({ className }) => {
  return (
    <div className={`${classes['logo-spinner']} ${className}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default LogoSpinner
