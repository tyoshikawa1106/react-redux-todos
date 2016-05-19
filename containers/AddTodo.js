import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className="slds-m-bottom--small">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <div className="slds-form-element">
          <div className="slds-form-element__control slds-input-has-fixed-addon">
            <input className="slds-input" placeholder="Please Subject" ref={node => {
              input = node
            }} />
            <span className="slds-form-element__addon">
              <button type="submit" className="slds-button slds-button--brand">Add</button>
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
