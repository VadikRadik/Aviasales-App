import classNames from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { optimalFilter } from '../../services/redux/actions'

import classes from './optimal-filter.module.scss'

const filterItemsLabels = ['Самый дешевый', 'Самый быстрый', 'Оптимальный']

const OptimalFilter = ({ value, filter }) => {
  const filterItems = filterItemsLabels.map((itemLabel, index) => {
    const itemClass = classNames(classes['optimal-filter__item'], {
      [classes['optimal-filter__item--selected']]: index === value,
    })
    return (
      <div key={index} className={itemClass} onClick={() => filter(index)}>
        {itemLabel}
      </div>
    )
  })
  return <div className={classes['optimal-filter']}>{filterItems}</div>
}

const mapStateToProps = (state) => {
  return {
    value: state.optimalFilterValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filter: bindActionCreators(optimalFilter, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OptimalFilter)
