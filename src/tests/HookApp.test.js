import React from 'react';
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { HookApp } from '../HookApp';


describe('Test in HookApp component', () => {
    test('should be render correctly', () => {
        const wrapper = shallow( <HookApp /> );
        expect(wrapper).toMatchSnapshot();
    });
});