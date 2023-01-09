import classes from './logo.module.scss'
import logoImage from './Logo.svg'

const Logo = (props) => {
  return (
    <div className={`${classes['logo']} ${props.className}`}>
      <img src={logoImage} alt="site logo"></img>
    </div>
  )
}

export default Logo
