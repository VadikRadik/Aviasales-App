import classnames from 'classnames'

import classes from './checkbox.module.scss'

const Checkbox = (props) => {
  const labelClass = classnames(classes['checkbox'], {
    [classes['checkbox--focused']]: props.focused,
  })
  const checkboxClass = classnames(classes['checkbox--visually-hidden'])
  const checkboxViewClass = classnames(classes['checkbox__view'])
  return (
    <label className={labelClass}>
      <input type="checkbox" className={checkboxClass} checked={props.checked} onChange={props.onChange} />
      <span className={checkboxViewClass}></span>
      {props.label}
    </label>
  )
}

export default Checkbox
