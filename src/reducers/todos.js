// 子Reducer
// stateのkey名と同名の関数で子Reducerを作る
function todos(state=[], action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { text: action.text, compeleted: false }
      ]
    case 'TOGGLE_TODO':
      return state.map((todo, index) => {
        if( index === action.id ) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }

        return todo
      })
    default:
      return state
  }
}

export default todos
