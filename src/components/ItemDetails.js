import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const ItemDetails = () => {
  const countriesList = useSelector((state) => state.covidReducer.oneCountry);
  const { name } = useParams();
  const countries = countriesList ? countriesList.find((country) => country.name === name) : 'Still fetching';
  const {
    confirmedCases,
    recovered,
    openCases,
    allDeaths,
    id,
  } = countries;
  return (
    <div className="detail-info" key={id}>
      <h1>
        {name}
        <span>
          {confirmedCases + openCases}
          {' '}
          cases
        </span>
      </h1>
      <ul className="ul">
        <li className="li d-flex">
          <p>Total cases confirmed</p>
          <p>
            {confirmedCases}
          </p>
        </li>
        <li className="li d-flex">
          <p>Total Deaths confirmed</p>
          <p>
            {allDeaths}
          </p>
        </li>
        <li className="li d-flex">
          <p>Total cases open</p>
          <p>
            {openCases}
          </p>
        </li>
        <li className="li d-flex">
          <p>Total recovered</p>
          <p>
            {recovered}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ItemDetails;
