import * as ActionTypes from '../actions/constants'

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.LOAD_TODOS:
      return [...action.payload]
    case ActionTypes.CREATE_TODO:
      return [...state, action.payload]
    case ActionTypes.REMOVE_TODO:
      const newState = state.filter((todo) => {
        return todo.id !== action.payload
      })
      return newState
    case ActionTypes.UPDATE_TODO:
      const id = action.payload.id
      const data = action.payload.data
      const arrayOfTodosId = state.map(todo => todo.id)
      const updatedTodoIndex = arrayOfTodosId.indexOf(id)
      
      const updatedState = state.map((todo, index) => {
        if(index === updatedTodoIndex)
          return Object.assign({}, state[updatedTodoIndex], data)
        else
          return todo
      });
      return updatedState
    default:
      return state
  }
}
