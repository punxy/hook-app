import React from 'react';
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Test in TodoList component', () => {
    const handleDeleteTodo = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow( <TodoList 
        todos={demoTodos}
        handleDeleteTodo={handleDeleteTodo}
        handleToggle={handleToggle}
    /> );

    test('should be render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should be render all TODOs correctly', () => {
        expect( wrapper.find('TodoListItem').length ).toBe(demoTodos.length);
        const item = wrapper.find('TodoListItem').at(0);
        expect( item.prop('handleDeleteTodo') ).toEqual( expect.any(Function) );
        expect( item.prop('handleToggle') ).toEqual( expect.any(Function) );
    });
});