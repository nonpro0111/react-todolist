import React from 'react'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'
import Footer from './Footer'

export default function App() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )
}
