import { useState } from 'react'
import ToDoItem from './components/ToDoItem'
import ToDoContainer from './components/ToDoContainer'

function App() {
  const [ todoList, setToDoList ] = useState([])

  const hanldleSubmit = (todoItem) => {
    console.log('App', todoItem)
    setToDoList([
      ...todoList,
      todoItem
    ])
  }

  const handleOperate = (todoItem) => {
    console.log('handleOperate', todoItem)
    const newTodoList = todoList.filter(todo => todo.id !== todoItem.id)
    newTodoList.push(todoItem)
    setToDoList(newTodoList)
  }

  return (
    <div className="todo-app">
      <h2 className="todo-title">待办清单</h2>
      <ToDoItem onSubmit={hanldleSubmit} />
      <ToDoContainer todoList={todoList} onOperate={handleOperate} />
    </div>
  )
}

export default App
