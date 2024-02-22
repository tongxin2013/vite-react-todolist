import React, { useState } from "react";
import { Input, Button, message } from "antd";
import { STATUS } from "../../config/status";

const ToDoItem = (props) => {
  const { onSubmit } = props
  const [ todoItem, setToDoItem ] = useState({})

  const handleChange = (event) => {
    setToDoItem({
      id: Math.random(),
      content: event.target.value,
      status: STATUS.IS_CREATE
    })
  }

  const handleSubmit = () => {
    if (!todoItem.content || todoItem.content === '') {
      message.error('待办内容不能为空！')
    } else {
      onSubmit && onSubmit(todoItem)
    }
  }

  return (
    <div className="todo-item-input">
      <Input value={todoItem.content} placeholder="请输入待办事项" allowClear onPressEnter={handleSubmit} onChange={handleChange} />
      <Button size="large" type="primary" onClick={handleSubmit}>提交</Button>
    </div>
  )
}

export default ToDoItem