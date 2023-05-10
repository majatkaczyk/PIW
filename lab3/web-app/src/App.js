import './App.css';
import { useState } from 'react';
import React from 'react';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import List from './components/showList/List';
import Search from './components/search/Search';
import Add from './components/add/Add';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';


function App() {
  const listOfVillas = [
    {
      name: "Villaone",
      rooms: "4",
      description: "Good villa",
      price: 1000000,
      address: "Krawiecka 5, 50-529 Wrocław"
    },
    {
      name: "Villatwo",
      rooms: "2",
      description: "Pretty good villa",
      price: 600000,
      address: "Piłsudskiego 40, 50-033 Wrocław"
    },
    {
      name: "Villathree",
      rooms: "3",
      description: "Not a good villa",
      price: 200000,
      address: "Stawowa 9, 50-018 Wrocław"
    }]
  const [list, setList] = useState(listOfVillas);
  const [cityFilter, setCityFilter] = useState("city");
  const [roomFilter, setRoomFilter] = useState("rooms");
  const [descrFilter, setDescrFilter] = useState("descr");

  const handleAddItem = newItem => {
    setList([...list, newItem]);
  };


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="light">
          <Container class="navbar bg-light navbar-margin mr-auto" >
            <div class="navbar-brand ">Find your dream house!</div>
            <Link class="nav-link navbar-padding" to="/">Home</Link>
            <Link class="nav-link navbar-padding" to="/search-city">Search by city</Link>
            <Link class="nav-link navbar-padding" to="/search-rooms">Search by rooms</Link>
            <Link class="nav-link navbar-padding" to="/search-decription">Search by description</Link>
            <Link class="nav-link navbar-padding link-add" to="/add">Add</Link>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<List list={list}></List>}></Route>
          <Route path="/search-city" element={<Search villas={list} option={cityFilter} />}> </Route>
          <Route path="/search-rooms" element={<Search villas={list} option={roomFilter} />}> </Route>
          <Route path="/search-decription" element={<Search villas={list} option={descrFilter} />}> </Route>
          <Route path="/add" element={<Add handleAddItem={handleAddItem} />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
