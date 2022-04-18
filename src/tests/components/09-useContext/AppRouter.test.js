import React from 'react';
import { mount } from "enzyme";
import '@testing-library/jest-dom'; 
import { UserContext } from '../../../components/09-useContext/UserContext';
import { AppRouter } from '../../../components/09-useContext/AppRouter';

describe('Test in AppRouter component', () => {

    const user = {
        name: 'Sebastián Silva',
        email: 'sebasilvac88@gmail.com'
    };

    const wrapper = mount(
        <UserContext.Provider value={{user}} >
            <AppRouter />
        </UserContext.Provider>
    );

    test('should be render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});