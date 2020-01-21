import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {fetchBase} from "../../utils/fetch";

export const User = () => {
    const [userInfo, setUserInfo] = useState({});
    const [purchases, setPurchases] = useState([]);
    const {userId} = useParams();

    useEffect(() => {
        fetch(`${fetchBase}/users/${userId}`)
            .then(response => {
                response.json()
                    .then(json => {
                        setUserInfo(json.user);
                    });
            })
    }, [userId]);

    useEffect(() => {
        fetch(`${fetchBase}/purchases/${userId}`)
            .then(response => {
                response.json()
                    .then(json => {
                        setPurchases(json.purchases);
                    });
            })
    }, [userId]);

    const userInfoDisplay = (
      <div>
          Prénom : {userInfo.firstName}
          Nom: {userInfo.lastName}
      </div>
    );

    const purchasesDisplay = (
        <div>
            {purchases.map((product, i) => (
                <div key={`product-${i}`}>
                    {product.name} : {product.price}€ (HT)
                </div>
            ))}
        </div>
    );

    return (
        <div>
            {userInfoDisplay}
            {purchasesDisplay}
        </div>
    )
};

export default User;
