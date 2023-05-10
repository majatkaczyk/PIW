import { useState } from "react";
import React from "react";
import List from "../showList/List";

const Search = ({ villas, option }) => {
    const [query, setQuery] = useState("");
    let listOfVillasHtml = [];

    switch (option) {
        case "city":
            listOfVillasHtml = villas
                .filter(it => it.address.includes(query))
                .map(it => <p>{it.name} {it.description} {it.address} {it.rooms}</p>);
            break;
        case "rooms":
            listOfVillasHtml = villas
                .filter(it => it.rooms.includes(query))
                .map(it => <p>{it.name} {it.description} {it.address} {it.rooms}</p>);
            break;
        case "descr":
            listOfVillasHtml = villas
                .filter(it => it.description.includes(query))
                .map(it => <p>{it.name} {it.description} {it.address} {it.rooms}</p>);
            break;
        default:
            break;
    }

    return (
        <section >
            <input value={query} onChange={e => { setQuery(e.target.value) }} />
            {listOfVillasHtml}
        </section>)
}

export default Search;