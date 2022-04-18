import '@testing-library/jest-dom';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Test in todoReducer reducer', () => {
    test('should be return default state', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });

    test('should be add a new todo', () => { 

        const newTodo = {
            id:3,
            description: 'Aprender Mongo',
            done: false
        }
        
        const state = todoReducer(demoTodos, {
            type: 'ADD_TODO',
            payload: newTodo
        });

        expect(state.length).toBe(3);

        expect(state).toEqual([
            ...demoTodos,
            newTodo
        ]);

    });

    test('should be delete a todo', () => { 

        const state = todoReducer(demoTodos, {
            type: 'DELETE_TODO',
            payload: 1
        });

        expect(state).toEqual([demoTodos[1]]);

    });

    test('should be toogle a todo', () => { 
        const state = todoReducer(demoTodos, {
            type: 'TOGGLE_TODO',
            payload: 1
        });

        expect(state[0].done).toBeTruthy();
        expect(state[1]).toEqual(demoTodos[1]);
    });
});