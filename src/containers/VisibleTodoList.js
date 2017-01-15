import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

// 表示するTodosを取得する関数
function getVisibleTodos(todos, filter) {
  switch(filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
  }
}

function mapStateToProps(state) {
  return { todos: getVisibleTodos(state.todos, state.visibilityFilter) }
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)
export default VisibleTodoList
