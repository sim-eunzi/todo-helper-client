import React, { useState, useEffect } from 'react'
import TodoItem from './TodoItem'
import TodoInput from './TodoInput'

import { getDatabase, ref, onValue } from "firebase/database";

export default function TodoList() {
  const [todoList, setTodoList] = useState()
  useEffect(() => {
    const todoList = [] 
    const database = getDatabase()
    const todoRef = ref(database, 'todo/sim-eunji')
    onValue(todoRef, (snapshot) => {
      for(const todo in snapshot.val()) {
        todoList.push({ todo: todo })
      }
    })
    setTodoList(todoList)
  }, [])

  return (
    <div className="todo-list"> 
      <h2>✅ 투두 리스트 </h2>
      <p>당신의 TODO를 슬랙으로 받아보세요</p>

      <TodoInput />
      {
        todoList?.map((todo,i) => <TodoItem key={i} {...todo} /> )
      }
    </div>
  )
}