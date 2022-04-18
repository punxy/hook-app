import React from 'react';
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Test in TodoAdd component', () => {
    const handleAddTodo = jest.fn();

    const wrapper = shallow( <TodoAdd 
        handleAddTodo={handleAddTodo}
    /> );

    test('should be render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should not be called handleAddTodo', () => { 
        
        const formSubmit = wrapper.find('form').prop('onSubmit'); // handleSubmit

        formSubmit({
            preventDefault(){} // manera corta de { preventDefault: () => {} }
        });

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('should be call a handleAddTodo function', () => { 
        const value = 'Texto de prueba';
        wrapper.find('input').simulate('change', {
            target: { 
                name: 'description',
                value
             }
        });

        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( handleAddTodo ).toHaveBeenCalled();
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) );
        expect( handleAddTodo ).toHaveBeenCalledWith({
            id: expect.any(Number),
            description: value,
            done: false
        });

        expect( wrapper.find('input').prop('value') ).toBe('');
    });
});