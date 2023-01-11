import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Checkbox from '../checkbox/checkbox'
import { toggleTransfer } from '../../actions'

import classes from './transfers-filter.module.scss'

const checkboxLabels = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']

const TransfersFilter = ({ className, onClick, transfersFilter = undefined }) => {
  const checkboxes = checkboxLabels.map((label, index) => {
    return (
      <div key={index} className={classes['transfers-filter__list-item']}>
        <Checkbox label={label} onChange={(e) => onClick(e, index)} checked={transfersFilter?.checks[index]} />
      </div>
    )
  })
  return (
    <div className={`${classes['transfers-filter']} ${className}`}>
      <div className={classes['transfers-filter__list']}>
        <span className={classes['transfers-filter__list-label']}>Количество пересадок</span>
        {checkboxes}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    transfersFilter: { checks: state.transfersFilter.checks },
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: bindActionCreators(toggleTransfer, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransfersFilter)
