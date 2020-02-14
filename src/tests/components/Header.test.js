import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';
import {shallow} from 'enzyme'

test('render Header component', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();

    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('h1').length).toBe(1);
})