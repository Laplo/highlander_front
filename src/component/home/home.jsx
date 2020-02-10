import React, {useEffect, useState} from 'react';
import {fetchBase} from "../../utils/fetch";
import {Card, ListGroup, ListGroupItem, NavLink} from "reactstrap";
import {Link} from "react-router-dom";

export const Home = () => {

    const [listUser, setListUser] = useState([]);
    const [caCompany, setCaCompany] = useState({
        excludingTax: 0,
        includingTax: 0
    });

    useEffect(() => {
        fetch(`${fetchBase}/users`)
            .then(response => {
                response.json()
                    .then(json => {
                        setListUser(json.users);
                    });
            });
    }, []);

    useEffect(() => {
        fetch(`${fetchBase}/company/totalRevenue`)
            .then(response => {
                response.json()
                    .then(json => {
                        setCaCompany(json.totalRevenue);
                    });
            });
    }, []);

    const listUserDisplay = (
        <ListGroup>
            {listUser.map((user, i) => (
                <ListGroupItem key={`user-${i}`}>
                    <Card>
                        <NavLink to={`profil/${user.id}`} tag={Link}>
                            {user.firstName} {user.lastName}
                        </NavLink>
                    </Card>
                </ListGroupItem>
            ))}
        </ListGroup>
    );

    const caCompanyDisplay = (
        <div id={"Ca"}>
            <span id={"HT"}>Chiffre d'affaire d'Highlander HT: {caCompany.excludingTax}€</span>
            <br/>
            <span id={"TTC"}>Chiffre d'affaire d'Highlander TTC : {caCompany.includingTax}€</span>
        </div>
    );

    return (
        <div>
            {listUserDisplay}
            {caCompanyDisplay}
        </div>
    )
};

export default Home;
