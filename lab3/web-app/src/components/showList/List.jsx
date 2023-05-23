import React from "react";
import './List.css'
import { useSelector, useDispatch } from "react-redux";
import { changeFollowedToTrue } from "../../redux_files/basketSlice";

function List() {
    const list = useSelector((state) => state.basket.data);
    const dispatch = useDispatch();
    return (
        <div>
            <ul className="list-group">
                {list.map((item, index) => (
                    <li className="list-group-item list-group-item-action" key={index}>
                        <div className="justify-content-between">
                            <h2 className="mb-1">{item.name}</h2>
                            <p className="mb-1">{item.description}</p>
                            <p className="mb-1">{item.rooms} bedrooms</p>
                            <p className="mb-1">Adress: {item.address}</p>
                            <p className="mb-1">Email: {item.email}</p>
                            <p className="mb-1">Price: {item.price} PLN</p>
                            <button className="btn btn-primary" onClick={() => {
                                console.log("item.id ", item.id);
                                dispatch(changeFollowedToTrue(item.id));
                            }}>
                                Add to basket</button>

                        </div>

                    </li>
                ))}
            </ul>
        </div >
    )

}

export default List;