/* eslint-disable dot-notation */
/* eslint-disable quotes */
import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const ItemDetails = () => {
  const countriesList = useSelector((state) => state.covidReducer.oneCountry);
  const { name } = useParams();
  const countries = countriesList ? countriesList.find((country) => country.name === name) : "Still fetching";
  const {
    confirmedCases,
    recovered,
    openCases,
    allDeaths,
    id,
  } = countries;
  return (
    <div className="detail-info" key={id}>
      <h1>{name}</h1>
      <table className="table">
        <thead>
          <tr className="row">
            <th className="column head">Confirmed</th>
            <th className="column head">Deaths</th>
            <th className="column head">Open</th>
            <th className="column head">Recovered</th>
          </tr>
        </thead>
        <tbody>
          <tr className="row">
            <td className="column">
              {confirmedCases}
              {' '}
              cases
            </td>
            <td className="column">
              {allDeaths}
              {' '}
              cases
            </td>
            <td className="column">
              {openCases}
              {' '}
              cases
            </td>
            <td className="column">
              {recovered}
              {' '}
              cases
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ItemDetails;
