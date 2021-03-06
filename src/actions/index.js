// Action Creators
export function addTodo(text) {
  return { type: 'ADD_TODO', text }
}

export function toggleTodo(id) {
  return { type: 'TOGGLE_TODO', id }
}

export function setVisibilityFilter(filter) {
  return { type: 'SET_VISIBILITY_FILTER', filter }
}
