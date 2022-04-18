import React from 'react';
import { mount } from "enzyme";
import '@testing-library/jest-dom';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Test in HomeScreen component', () => {

    const user = {
        name: 'Sebastián Silva',
        email: 'sebasilvac88@gmail.com'
    };

    const wrapper = mount(
        <UserContext.Provider value={{user}} >
            <HomeScreen />
        </UserContext.Provider>
    );

    test('should be render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});