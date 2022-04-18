import React from 'react';
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Test in TodoListItem component', () => {

    const handleDeleteTodo = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow( <TodoListItem 
        todo={demoTodos[0]}
        index={1}
        handleDeleteTodo={handleDeleteTodo}
        handleToggle={handleToggle}
    /> );


    test('should be render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should be call to handleDeleteTodo', () => { 
        const button = wrapper.find('button');
        button.simulate('click');

        expect( handleDeleteTodo ).toHaveBeenCalled();
        expect( handleDeleteTodo ).toHaveBeenCalledWith( demoTodos[0].id );
    });

    test('should be call to handleToggle', () => { 
        const p = wrapper.find('p');
        p.simulate('click', 1);

        expect( handleToggle ).toHaveBeenCalled();
        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id )
    });

    test('should show the text correctly', () => { 
        const p = wrapper.find('p');
        expect(p.text()).toBe(`2 ${demoTodos[0].description}`);
        expect(p.hasClass('complete') ).toBeFalsy();

    });

    test('should be have a class complete if TODO.done is true', () => {

        const completeTodo = demoTodos[0];
        completeTodo.done = true;

        const wrapper = shallow( <TodoListItem 
            todo={completeTodo}
        /> );

        expect(wrapper.find('p').hasClass('complete') ).toBeTruthy();
    });
});