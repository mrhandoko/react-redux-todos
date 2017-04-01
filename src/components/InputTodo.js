import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createTodo, updateTodo } from '../actions'
import '../App.css'

class InputTodo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      writeTodo: '',
      editTodo: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      editTodo: nextProps.contentEditTodo
    })
  }

  stateWriteTodo(event) {
    this.setState({
      writeTodo: event.target.value
    })
  }

  changeEditTodo(event) {
    this.setState({
      editTodo: event.target.value
    })
  }

  submitTodo(event) {
    event.preventDefault()
    this.props.dispatchCreateTodo(this.state.writeTodo)
    this.setState({
      writeTodo: ''
    })
  }

  updateTodo(event, id) {
    event.preventDefault()
    this.props.dispatchUpdateTodo(id , this.state.editTodo)
    this.setState({
      editTodo: ''
    })
    this.props.hideEditTodoForm()
  }

  render() {
    return (
      <div className="Main">
        <div className="Todo-wrapper">
          { !this.props.statusEditing ?
            (<form onSubmit={(event) => this.submitTodo(event)}>
              <div className="Text-wrapper">
                <textarea rows={15} onChange={(event) => this.stateWriteTodo(event)} value={this.state.writeTodo} />
              </div>
              <div>
                <button className="Submit">SUBMIT</button>
              </div>
            </form>) : (
              <form onSubmit={(event) => this.updateTodo(event, this.props.idEditTodo)}>
                <div className="Text-wrapper">
                  <h1>{this.props.idEditTodo}</h1>
                  <textarea rows={15} onChange={(event) => this.changeEditTodo(event)} value={this.state.editTodo} />
                </div>
                <div>
                  <input type="submit" className="Update" defaultValue="UPDATE" />
                  <button className="Cancel" onClick={this.props.hideEditTodoForm}>CANCEL</button>
                </div>
              </form>
            )
          }
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchCreateTodo: data => dispatch(createTodo(data)),
    dispatchUpdateTodo: (id, data) => dispatch(updateTodo(id, data))
  }
}

export default connect(null, mapDispatchToProps)(InputTodo)
