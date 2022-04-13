import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './style.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
    const [todos, dispatchTodo] = useReducer(todoReducer, [], init);
    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleAddTodo = newTodo => {
        dispatchTodo({
            type: 'ADD_TODO',
            payload: newTodo
        });
    };

    const handleDeleteTodo = (todoId) => {
        const actionDeleteTodo = {
            type: 'DELETE_TODO',
            payload: todoId
        };

        dispatchTodo(actionDeleteTodo);
    };

    const handleToggle = (todoId) => {
        dispatchTodo({
            type: 'TOGGLE_TODO',
            payload: todoId
        });
    }

    return (
        <div>
            <h1>TodoApp <small>({todos.length})</small> </h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <TodoList 
                        todos={todos} 
                        handleDeleteTodo={handleDeleteTodo} 
                        handleToggle={handleToggle}
                    />
                </div>

                <div className='col-5'>
                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>
        </div>
    )
}
