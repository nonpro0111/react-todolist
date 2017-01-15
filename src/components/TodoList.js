import React from 'react'

export default function TodoList({todos, onTodoClick}) {
  const completedStyle = { textDecoration: 'line-through' }

  const todoList = todos.map((todo, index) => {
    return (
      <li key={index} onClick={() => onTodoClick(index)}>
        {todo.text}
      </li>
    )                         
  })

  return (
    <ul>
      {todoList}
    </ul>
  )
}
