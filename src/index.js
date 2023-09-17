import React from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'

import store from './Components/redux/store'
import App from './Components/App'

import './index.scss'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
