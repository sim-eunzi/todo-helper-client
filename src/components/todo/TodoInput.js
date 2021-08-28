import React, { useState } from 'react'
import { getDatabase, ref, set } from "firebase/database";

export default function TodoInput() {
  const db = getDatabase()

  const [todo, setTodo] = useState('')
  const handleOnChange = (e) => {
    setTodo(e.target.value)
  }

  const createTodo = (e) => {
    if(e.key === 'Enter') {
      set(ref(db, 'todo/sim-eunji/5'), todo)
      setTodo('')
    }
  }

  return (
    <div className="todo-input">
      <input 
        value={todo} 
        onChange={handleOnChange}
        onKeyDown={createTodo}
        type="text" 
        placeholder="할 일을 입력하고 enter 키를 눌러주세요" />
    </div>
  )
}