import React from 'react'
import TodoList from './components/todo/TodoList'
import firebase from './module/firebase'

function App() {
  console.log(firebase)
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
