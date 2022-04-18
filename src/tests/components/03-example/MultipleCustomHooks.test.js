import React from 'react';
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { MultipleCustomHooks } from '../../../components/03-example/MultipleCustomHooks';
import { useFetch } from '../../../hook/useFetch';
import { useCounter } from '../../../hook/useCounter';

jest.mock('../../../hook/useFetch');
jest.mock('../../../hook/useCounter');

describe('Test in MultipleCustomHook component', () => {

    test('should be render correctly', () => {
        useCounter.mockReturnValue({
            counter: 1,
            increment: () => {},
        });

        useFetch.mockReturnValue({
            loading: true,
            data: null,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks /> );
        expect(wrapper).toMatchSnapshot();
    });

    test('should show info', () => { 
        
        useCounter.mockReturnValue({
            counter: 1,
            increment: () => {},
        });

        useFetch.mockReturnValue({
            data: [{
                author: 'Seba',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        }); 

        const wrapper = shallow( <MultipleCustomHooks /> );
        
        expect(wrapper.find('.alert').exists()).toBeFalsy();
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
        expect(wrapper.find('figcaption').text().trim()).toBe('Seba');        
    });
});