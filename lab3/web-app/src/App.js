import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import List from './components/showList/List';
import Search from './components/search/Search';
import Add from './components/add/Add';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { Basket } from './components/basket/Basket';
import { setList, findVilla } from "./redux_files/basketSlice";
import { useDispatch } from 'react-redux';

function App() {

  const list = useState([]);
  const cityFilter = "city";
  const roomFilter = "rooms";
  const descrFilter = "descr";

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./data/villas.json');
        const villas = await response.json();

        dispatch(setList(villas));
      } catch (error) {
        console.error('Error fetching', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleAddItem = newItem => {
    setList([...list, newItem]);
  };

  const handleFindVilla = (option, query) => {
    dispatch(findVilla({ option, query }));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="light">
          <Container className="navbar bg-light navbar-margin mr-auto" >
            <div className="navbar-brand ">Find your dream house!</div>
            <Link className="nav-link navbar-padding" to="/">Home</Link>
            <Link className="nav-link navbar-padding" to="/search-city">Search by city</Link>
            <Link className="nav-link navbar-padding" to="/search-rooms">Search by rooms</Link>
            <Link className="nav-link navbar-padding" to="/search-decription">Search by description</Link>
            <Link className="nav-link navbar-padding link-add" to="/add">Add</Link>
            <Link className="nav-link navbar-padding" to="/basket"> Basket</Link>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<List ></List>}></Route>
          <Route path="/search-city" element={<Search option={cityFilter} onFindVilla={handleFindVilla} />}> </Route>
          <Route path="/search-rooms" element={<Search option={roomFilter} onFindVilla={handleFindVilla} />}> </Route>
          <Route path="/search-decription" element={<Search option={descrFilter} onFindVilla={handleFindVilla} />}> </Route>
          <Route path="/add" element={<Add handleAddItem={handleAddItem} />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
