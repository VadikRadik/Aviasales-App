import classNames from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { price, time, optimal } from '../../actions'

import classes from './optimal-filter.module.scss'

const filterItemsLabels = ['Самый дешевый', 'Самый быстрый', 'Оптимальный']

const OptimalFilter = ({ value, price, time, optimal }) => {
  const actions = [price, time, optimal]
  const filterItems = filterItemsLabels.map((itemLabel, index) => {
    const itemClass = classNames(classes['optimal-filter__item'], {
      [classes['optimal-filter__item--selected']]: index === value,
    })
    return (
      <div key={index} className={itemClass} onClick={actions[index]}>
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
    price: bindActionCreators(price, dispatch),
    time: bindActionCreators(time, dispatch),
    optimal: bindActionCreators(optimal, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OptimalFilter)
