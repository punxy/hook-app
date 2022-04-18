import React from 'react';
import { mount, shallow } from "enzyme";
import '@testing-library/jest-dom';
import { demoTodos } from '../../fixtures/demoTodos';
import { act } from 'react-dom/test-utils';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';

describe('Test in TodoApp component', () => {

    const wrapper = shallow( <TodoApp /> );
    Storage.prototype.setItem = jest.fn();

    test('should be render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should be add a TODO', () => { 
        const wrapper = mount(<TodoApp />); // el mount proporciona más info

        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        });

        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp (2)');
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
    });

    test('should be delete a TODO', () => { 
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp (1)');
    
        wrapper.find('TodoList').prop('handleDeleteTodo')(demoTodos[0].id);
        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp (0)');
    });
});