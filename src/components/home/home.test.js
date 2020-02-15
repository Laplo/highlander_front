import React from 'react';
import { shallow, } from '../../enzyme';
import Home from "./home";

describe('Home', () => {
    it('it should have two child elements of CA', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find('div#Ca')).toHaveLength(1);
        expect(wrapper.find('div#Ca').children().find('span')).toHaveLength(2);
    })
});
