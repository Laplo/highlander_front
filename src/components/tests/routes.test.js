import React from 'react';
import Routes from "../routes/routes";
import {Route} from "react-router";
import {shallow} from "../../enzyme";

describe('Routes', () => {
    it('should have two <Routes /> component available', () => {
        const wrapper = shallow(<Routes />);
        expect(wrapper.find(Route)).toHaveLength(2);
    });
});
