import React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import Home from "../home/home";
import User from "../user/user";
import {Col, Row} from "reactstrap";

export const Routes = () => {
return (
    <Row>
        <Col sm="3"/>
        <Col>
            <Switch>
                <Route path="/profil/:userId" component={User} />
                <Route path="/" exact component={Home}/>
                <Redirect to="/" />
            </Switch>
        </Col>
        <Col sm="3"/>
    </Row>
)
};

export default Routes;
