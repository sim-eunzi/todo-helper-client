import React from 'react'

export default function TodoItem({ todo }) {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <span className="todo"> {todo} </span>
      <span className="category"> 숭실대학교 </span>
    </div>
  )
}