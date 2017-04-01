import React, { Component } from 'react'

import './App.css'
import Todolist from './components/Todolist'
import InputTodo from './components/InputTodo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isEditing: false,
      idEditTodo: 0,
      contentEditTodo: ''
    }
  }

  showEditTodoForm() {
    this.setState({
      isEditing: true
    })
  }

  hideEditTodoForm() {
    this.setState({
      isEditing: false
    })
  }

  getIdEditTodo(id, content) {
    this.setState({
      idEditTodo: id,
      contentEditTodo: content
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          REACT Todo
        </div>
        <div className="List">
          <Todolist showEditTodoForm={() => this.showEditTodoForm()} getIdEditTodo={(id, content) => this.getIdEditTodo(id, content)} />
        </div>
          <InputTodo statusEditing={this.state.isEditing} hideEditTodoForm={() => this.hideEditTodoForm()} idEditTodo={this.state.idEditTodo} contentEditTodo={this.state.contentEditTodo} />
      </div>
    )
  }
}

export default App;
