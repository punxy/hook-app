import React from 'react';
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Test in RealExampleRef component', () => {

    test('should be render correctly', () => {
        const wrapper = shallow( <RealExampleRef /> );
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBeFalsy();
    });

    test('should be render a MultipleCustomHook component', () => {
        const wrapper = shallow( <RealExampleRef /> );
        wrapper.find('button').simulate('click');
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBeTruthy();
    });
});