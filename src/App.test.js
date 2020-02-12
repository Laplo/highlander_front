import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Col} from "reactstrap";
import { shallow } from './enzyme';
import App from "./App";
import {Routes} from "./components/routes/routes";


describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should have a <BrowserRouter /> component', () => {
        expect(wrapper.find(BrowserRouter)).toHaveLength(1);
    });

    it('should have three <Col /> components', () => {
        expect(wrapper.find(Col)).toHaveLength(3);
    });

    it('should have one <Routes /> component', () => {
        expect(wrapper.find(Routes)).toHaveLength(1);
    });
});
