import React, {Component} from 'react'
import { connect } from 'react-redux'

import '../App.css'
import { fetchTodos, removeTodo } from '../actions'

class Todolist extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  removeTodo(id) {
    this.props.removeTodo(id)
  }

  updateTodo() {
    this.props.showEditTodoForm()
  }

  checkCompleted(id) {
    console.log(id);
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.todos.map((item, index) =>
            <li key={index}>{item.title}
            <input type="checkbox" onChange={() => this.checkCompleted(index)} />
            <button onClick={() => {
                this.updateTodo(item.id)
                this.props.getIdEditTodo(item.id, item.title)
              }}>Edit</button>
            <button onClick={() => this.removeTodo(item.id)}>Remove</button></li>)
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
    removeTodo: (id) => dispatch(removeTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist)
