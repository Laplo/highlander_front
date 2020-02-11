import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Routes from "./components/routes/routes";
import {Col, Row} from "reactstrap";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Row>
                <Col sm="3"/>
                <Col><Routes /></Col>
                <Col sm="3"/>
            </Row>
        </BrowserRouter>
    </div>
  );
}

export default App;
