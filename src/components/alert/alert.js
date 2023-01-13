import classNames from 'classnames'

import classes from './alert.module.scss'

const Alert = (props) => {
  const alertClass = classNames(
    { [classes['alert--error']]: props.type === 'error' },
    { [classes['alert--info']]: props.type === 'info' }
  )
  return (
    <div className={`${classes['alert']} ${alertClass} ${props.className}`} onClick={props.onClick}>
      {props.message}
    </div>
  )
}

export default Alert
