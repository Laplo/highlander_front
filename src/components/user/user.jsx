import React, {useEffect, useState} from "react";
import {fetchBase} from "../../utils/fetch";

export const User = ({match}) => {
    const [userInfo, setUserInfo] = useState({});
    const [purchases, setPurchases] = useState([]);
    const {userId} = match.params;

    useEffect(() => {
        fetch(`${fetchBase}/users/${userId}`)
            .then(response => {
                response.json()
                    .then(json => {
                        setUserInfo(json.user);
                    });
            })
            .catch(() => {
                setUserInfo({});
            })
    }, [userId]);

    useEffect(() => {
        fetch(`${fetchBase}/purchases/user/${userId}`)
            .then(response => {
                response.json()
                    .then(json => {
                        setPurchases(json.purchases);
                    });
            })
    }, [userId]);

    const userInfoDisplay = (
      <div id={"user-info"}>
          <span id={"first-name"}>Prénom : {userInfo.firstName !== undefined ? userInfo.firstName : null}</span>&nbsp;
          <span id={"last-name"}>Nom : {userInfo.lastName !== undefined ? userInfo.lastName : null}</span>
      </div>
    );

    const purchasesDisplay = (
        <div id={"purchases"}>
            {purchases.map((product, i) => (
                <div key={`product-${i}`} class={"product"}>
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
