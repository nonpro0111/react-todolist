// 子Reducer
// stateのkey名と同名の関数で子Reducerを作る
function visibilityFilter(state='SHOW_ALL', action) {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
