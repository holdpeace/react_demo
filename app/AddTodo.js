import React from 'react'

const AddTodo = ({onAddTodo}) => {
  let newTodo;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!newTodo.value.trim()) {
          return
        }
        onAddTodo(newTodo.value);
        newTodo.value = '';
      }}>
        <input ref={node => {newTodo = node}} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodo;
