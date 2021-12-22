import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MdArrowBackIosNew, MdSettings, MdKeyboardVoice } from 'react-icons/md';
import { fetchCountriesFromApi } from '../redux/Covid19/covidReducer';
import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountriesFromApi());
  }, []);
  return (
    <nav className="navBar">
      <ul className="nav-ul">
        <li key={1}>
          <NavLink to="/" className={(navData) => (navData.isActive ? 'active-link' : '')}>
            <MdArrowBackIosNew />
          </NavLink>
        </li>
        <li key={2}>
          <NavLink to="/" className={(navData) => (navData.isActive ? 'active-link' : '')}>
            Covid Stats
          </NavLink>
        </li>
        <li key={3}>
          <MdKeyboardVoice />
          <MdSettings />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
