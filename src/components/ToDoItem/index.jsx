import React, { useState } from "react";
import { Input, Button } from "antd";
import { STATUS } from "../../config/status";

const ToDoItem = (props) => {
  const { onSubmit } = props

  const [ todoItem, setToDoItem ] = useState({
    id: Math.random(),
    content: '',
    status: STATUS.IS_CREATE
  })

  const handleChange = (event) => {
    console.log(event)
    console.log(event.target.value)
    setToDoItem({
      ...todoItem,
      content: event.target.value
    })
  }

  const handleSubmit = () => {
    console.log('handleSubmit')
    onSubmit && onSubmit(todoItem)
  }

  return (
    <div className="todo-item-input">
      <Input value={todoItem.content} onPressEnter={handleSubmit} onChange={handleChange} />
      <Button size="large" type="primary" onClick={handleSubmit}>提交</Button>
    </div>
  )
}

export default ToDoItem