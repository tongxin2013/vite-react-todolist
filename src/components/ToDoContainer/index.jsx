import React from "react";
import { List } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { STATUS } from "../../config/status";

const ToDoContainer = (props) => {
  const { todoList = [], onOperate, filterStatus } = props
  
  const handleOperate = (operate, item) => {
    console.log(operate, item)
    switch (operate) {
      case 'is-delete':
        onOperate && onOperate({
          ...item,
          status: STATUS.IS_DELETE
        })
        break;
      case 'is-done':
        onOperate && onOperate({
          ...item,
          status: item.status === STATUS.IS_DONE ? STATUS.IS_CREATE : STATUS.IS_DONE
        })
        break;
      default:
        break;
    }
  }

  const showTodoList = todoList.filter(todo => {
    return todo.status !== STATUS.IS_DELETE && filterStatus.indexOf(todo.status.toString())  > -1
  })

  return (
    <div className="todo-container">
      <List
        dataSource={showTodoList}
        renderItem={
          todo => (
            <List.Item className={todo.status === STATUS.IS_DONE ? "todo-container-list-done" : "todo-container-list"}>
              {todo.content}
              <div className="todo-item-operate">
                <CloseCircleOutlined onClick={() => handleOperate('is-delete', todo)} />
                <CheckCircleOutlined onClick={() => handleOperate('is-done', todo)} />
              </div>
            </List.Item>
          )
        } 
      />
    </div>
  )
}

export default ToDoContainer
