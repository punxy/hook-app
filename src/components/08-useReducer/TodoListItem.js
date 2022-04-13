import React from 'react'

export const TodoListItem = ({ todo, handleDeleteTodo, handleToggle, index }) => {
    return (
        <div className='row m-1'>
            <div className='col-6'>
                <p 
                    onClick={() => handleToggle(todo.id)}
                    className={`${ todo.done && 'complete' }`}
                    >{ index + 1 } {todo.description}</p>
            </div>
            <div className='col-6'>
                <button
                    className='btn btn-danger btn-sm'
                    onClick={() => handleDeleteTodo(todo.id)}
                    >
                    borrar
                </button>
            </div>
        </div>
    )
}