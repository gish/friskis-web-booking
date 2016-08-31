import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import reducer from './reducer.js'
import App from './app.jsx'

const store = createStore(reducer, window.devToolsExtension ? window.devToolsExtension() : undefined)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'))
