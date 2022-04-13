import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleDeleteTodo, handleToggle}) => {
  return (
      <>
        {
            todos.map( (todo, index) => (
                <TodoListItem 
                    key={todo.id}
                    todo={todo}
                    index={index}
                    handleDeleteTodo={handleDeleteTodo}
                    handleToggle={handleToggle}
                />
            ))
        }
      </>
    
  )
}
