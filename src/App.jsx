import { useState } from 'react'
import ToDoItem from './components/ToDoItem'

function App() {
  const [ todoList, setToDoList ] = useState([])

  const hanldleSubmit = (todoItem) => {
    console.log('App', todoItem)
    setToDoList([
      ...todoList,
      todoItem
    ])
  }

  return (
    <div className="todo-app">
      <h2 className="todo-title">待办清单</h2>
      <ToDoItem onSubmit={hanldleSubmit} />
    </div>
  )
}

export default App
