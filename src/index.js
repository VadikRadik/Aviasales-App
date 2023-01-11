import React from 'react'
import ReactDOM from 'react-dom/client'
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'

import AviasalesApp from './components/aviasales-app'
import reducer from './reducer'

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <AviasalesApp />
  </Provider>
)
