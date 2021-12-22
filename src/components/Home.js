import React from 'react';
import { Route, Routes } from 'react-router';
import ItemDetails from './ItemDetails';
import ListItems from './ListItems';
import Navbar from './Navbar';

const Home = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<ListItems />} />
      <Route path="/itemsdetails/:name" element={<ItemDetails />} />
    </Routes>
  </>
);

export default Home;
