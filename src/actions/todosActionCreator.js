import * as ActionTypes from './constants'

export const loadTodos = (data) => {
  return {
    type: ActionTypes.LOAD_TODOS,
    payload: data
  }
}

export const fetchTodos = () => {
  return (dispatch) => {
    fetch('http://localhost:4000/todos')
    .then((response) => {
      return response.json()
    })
    .then((todos) => {
      dispatch(loadTodos(todos))
    })
  }
}

export const createTodo = (data) => {
  return dispatch => {
    const newData = {title: data, content: ''}
    fetch('http://localhost:4000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    }).then(res => res.json()).then(data => {
      return dispatch({
        type: ActionTypes.CREATE_TODO,
        payload: data
      })
    }).catch(err => {
      console.log(err)
    })
  }
}

export const removeTodo = (data) => {
  return dispatch => {
    fetch('http://localhost:4000/todos/' + data, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      return dispatch({
        type: ActionTypes.REMOVE_TODO,
        payload: data
      })
    }).catch((err) => {
      console.log(err)
    })
  }
}

export const updateTodo = (id, data) => {
  return dispatch => {
    const updatedData = {title: data, content: ''}
    console.log(id);
    console.log(updatedData);
    fetch('http://localhost:4000/todos/' + id, {
    method: 'PUT',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(updatedData)
    }).then((response) => {
      return response.json()
    }).then((data) => {
      return dispatch({
        type: ActionTypes.UPDATE_TODO,
        payload: {
          id: id,
          data: data
        }
      })
    }).catch((err) => {
      console.log(err)
    })
  }
}
