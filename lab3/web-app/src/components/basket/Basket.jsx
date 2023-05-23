import React from "react";
import { changeFollowedToFalse } from "../../redux_files/basketSlice";
import { useDispatch, useSelector } from "react-redux";

export const Basket = () => {
    const list = useSelector((state) => state.basket.data);
    const dispatch = useDispatch();
    return (
        <div>
            <ul className="list-group">
                {list.filter((item) => item.followed).map((villa, id) => (
                    <li className="list-group-item list-group-item-action" key={id}>
                        <div className="justify-content-between">
                            <h2 className="mb-1">{villa.name}</h2>
                            <p className="mb-1">{villa.description}</p>
                            <p className="mb-1">{villa.rooms} bedrooms</p>
                            <p className="mb-1">Adress: {villa.address}</p>
                            <p className="mb-1">Email: {villa.email}</p>
                            <p className="mb-1">Price: {villa.price} PLN</p>
                        </div>
                        <button onClick={() => dispatch(changeFollowedToFalse(villa.id))}>Remove from basket</button>

                    </li>

                ))}
            </ul>

        </div>
    );
};