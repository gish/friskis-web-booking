import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import reducer from './reducer'

const store = createStore(reducer, window.devToolsExtension ? window.devToolsExtension() : undefined)

ReactDOM.render(<Provider store={store}/>, document.getElementById('app'))
