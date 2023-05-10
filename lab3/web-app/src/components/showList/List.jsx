import React from "react";
import './List.css'

function List(properties) {
    return (
        <div>
            <ul className="list-group">
                {properties.list.map((item, index) => (
                    <li className="list-group-item list-group-item-action" key={index}>
                        <div className="justify-content-between">
                            <h2 className="mb-1">{item.name}</h2>
                            <p className="mb-1">{item.description}</p>
                            <p className="mb-1">{item.rooms} bedrooms</p>
                            <p className="mb-1">Adress: {item.address}</p>
                            <p className="mb-1">Price: {item.price} PLN</p>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List;