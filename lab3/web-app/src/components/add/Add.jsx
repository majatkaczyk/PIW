import { useState } from "react";
import React from "react";
import './Add.css'

function Add(props) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [rooms, setRooms] = useState(0);
    const [address, setAddress] = useState("");
    const [price, setPrice] = useState(0);

    const handleNameChange = event => {
        setName(event.target.value);
    };

    const handleDescriptionChange = event => {
        setDescription(event.target.value);
    };

    const handleRoomsChange = event => {
        setRooms(event.target.value);
    };

    const handleAddressChange = event => {
        setAddress(event.target.value);
    };

    const handlePriceChange = event => {
        setPrice(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const newItem = { name, description, rooms, price, address };
        props.handleAddItem(newItem);
        setName("");
        setDescription("");
        setRooms(0);
        setPrice(0);
        setAddress("");
    };

    return (

        <form onSubmit={handleSubmit} className="form-group d-flex justify-content-center">

            <div className="flex-column">
                <h4>Add new offer</h4>
                <div className="mb-3">
                    <label >Name </label>
                    <input className="form-control input-size" type="text" id="name" value={name} onChange={handleNameChange} required />
                </div>

                <div className="mb-3">
                    <label >Description </label>
                    <input className="form-control input-size" type="text" id="descr" value={description} onChange={handleDescriptionChange} required />
                </div>

                <div className="mb-3">
                    <label>Rooms </label>
                    <input className="form-control input-size" type="number" id="rooms" value={rooms} onChange={handleRoomsChange} required />
                </div>

                <div className="mb-3">
                    <label>Price </label>
                    <input className="form-control input-size" type="number" id="price" value={price} onChange={handlePriceChange} required />
                </div>

                <div className="mb-3">
                    <label>Address </label>
                    <input className="form-control input-size" type="text" id="address" value={address} onChange={handleAddressChange} required />
                </div>


                <button id="submit" type="submit" className="btn btn-primary">Add</button>

            </div>
        </form>
    );
}

export default Add;
