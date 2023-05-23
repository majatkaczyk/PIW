import { useState } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { findVilla } from "../../redux_files/basketSlice";

const Search = ({ option }) => {
    const [query, setQuery] = useState("");
    const villas = useSelector((state) => state.basket.data);
    const dispatch = useDispatch();
    let listOfVillasHtml = [];

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
        dispatch(findVilla({ option, query: e.target.value }));
    };
    console.log("villas ", villas)

    const filteredVillas = villas.filter((villa) => {
        switch (option) {
            case "city":
                return villa.address.includes(query);
            case "rooms":
                return villa.rooms.includes(query);
            case "descr":
                return villa.description.includes(query);
            default:
                return true;
        }
    })


    listOfVillasHtml = filteredVillas.map((villa) => (
        <p key={villa.id}>{villa.name} {villa.description} {villa.address} {villa.rooms}</p>
    ))
    return (
        <section>
            <input value={query} onChange={handleQueryChange} />
            {listOfVillasHtml}
        </section>
    );
}



export default Search;