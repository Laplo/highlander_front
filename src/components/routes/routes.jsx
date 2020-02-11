import React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import Home from "../home/home";
import User from "../user/user";

export const Routes = () => {
    return (
        <Switch>
            <Route path="/profil/:userId" component={User} />
            <Route path="/" exact component={Home}/>
            <Redirect to="/" />
        </Switch>
    )
};

export default Routes;
