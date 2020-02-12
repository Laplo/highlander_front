import React from 'react';
import { shallow } from '../../enzyme';
import User from "../user/user";

describe('User', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<User
            match={{params: {userId: "9e2e1d62-cdfb-475a-bf6f-7f802ac75a1a"},
                isExact: true, path: "/profil/:userId", url: "/profil/9e2e1d62-cdfb-475a-bf6f-7f802ac75a1a"}}
        />);
    });

    it('should have a block of user info', () => {
        expect(wrapper.find('div#user-info')).toHaveLength(1);
    });

    it('should have an element first name and an element last name', () => {
        expect(wrapper.find('div#user-info').children().find('span#first-name')).toHaveLength(1);
        expect(wrapper.find('div#user-info').children().find('span#last-name')).toHaveLength(1);
    })
});
