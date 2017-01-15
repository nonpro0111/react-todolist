import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import * as actions from './actions'
import todoApp from './reducers'
import App from './components/App'

const initialState = {
  todos: [
    { text: 'WEB+DB PRESSの原稿書く', completed: true},
    { text: '燃えるゴミを捨てる', completed: false }
  ],
  visibilityFilter: 'SHOW_ALL'
}

const store = createStore(todoApp, initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
)
