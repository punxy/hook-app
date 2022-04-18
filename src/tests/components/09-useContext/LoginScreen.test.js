import React from 'react';
import { mount } from "enzyme";
import '@testing-library/jest-dom';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Test in LoginScreen component', () => {

    const setUser = jest.fn();
    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
            }} >
            <LoginScreen  />
        </UserContext.Provider>
    );


    test('should be render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should be excecute setLogin', () => { 
        
        wrapper.find('button').simulate('click');
        expect( setUser ).toHaveBeenCalledWith({
            id: 123,
            name: 'Sebastián Silva',
            email: 'sebasilvac88@gmail.com'
        });

    });
});