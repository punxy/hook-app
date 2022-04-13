import React from 'react'
import { useForm } from '../../hook/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        };

        handleAddTodo(newTodo);
        reset();
    } 

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    name='description'
                    className='form-control'
                    placeholder='aprender'
                    autoComplete='off'
                    onChange={handleInputChange}
                    value={description}
                />

                <button 
                    type='submit' 
                    className='btn btn-primary btn-sm btn-block mt-1'
                    >
                    Agregar
                </button>
            </form>
        </>
    )
}
