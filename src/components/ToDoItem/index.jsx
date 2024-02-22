import React, { useState } from "react";
import { Input, Button } from "antd";
import { STATUS } from "../../config/status";

const ToDoItem = (props) => {
  const { onSubmit } = props

  const [ todoItem, setToDoItem ] = useState({})

  const handleChange = (event) => {
    console.log(event)
    console.log(event.target.value)
    setToDoItem({
      id: Math.random(),
      content: event.target.value,
      status: STATUS.IS_CREATE
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