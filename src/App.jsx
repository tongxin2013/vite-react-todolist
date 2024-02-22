import { useState } from 'react'
import ToDoItem from './components/ToDoItem'
import ToDoFilter from './components/ToDoFilter'
import ToDoContainer from './components/ToDoContainer'
import { STATUS } from './config/status'

function App() {
  const [ todoList, setToDoList ] = useState([])
  const [ filterStatus, setFilterStatus ] = useState(`${STATUS.IS_CREATE},${STATUS.IS_DONE}`) // 0,1

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

  const handleStatusChange = (status) => {
    console.log('status', status)
    setFilterStatus(status)
  }

  return (
    <div className="todo-app">
      <h2 className="todo-title">待办清单</h2>
      <ToDoItem onSubmit={hanldleSubmit} />
      <ToDoFilter filterStatus={filterStatus} onFilterStatus={handleStatusChange} />
      <ToDoContainer filterStatus={filterStatus} todoList={todoList} onOperate={handleOperate} />
    </div>
  )
}

export default App
