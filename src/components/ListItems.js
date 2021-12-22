import { useSelector } from 'react-redux';
import { CircularProgress } from 'react-cssfx-loading';
import { Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react';
import { useState } from 'react';

const ListItems = () => {
  const countries = useSelector((state) => state.covidReducer.oneCountry);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = countries.filter((item) => Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase()));
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(countries);
    }
  };
  const populate = countries
    ? countries.map((country) => (
      <div key={country.id} className="country d-flex">
        <Link
          className="navLink"
          to={{
            pathname: `/itemsdetails/${country.name}`,
          }}
        >
          <h4 className="companyName">{country.name}</h4>
        </Link>
        <div>
          <p className="casesConfirmedVal">{country.confirmedCases}</p>
          <p className="casesConfirmed">cases confirmed</p>
        </div>
      </div>
    ))
    : <div className="spinLoad"><CircularProgress className="BarWave" color="#fff" width="20%" duration="2s" /></div>;
  return (
    <div className="list-container">
      <h2>Search by Country name</h2>
      <Input
        className="search"
        icon="search"
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
      />
      <div className="list-countries d-flex">
        {searchInput.length > 1
          ? (
            filteredResults.map((country) => (
              <div key={country.id} className="country d-flex">
                <Link
                  className="navLink"
                  to={{
                    pathname: `/itemsdetails/${country.name}`,
                  }}
                >
                  <h4 className="companyName">{country.name}</h4>
                </Link>
                <div>
                  <p className="casesConfirmedVal">{country.confirmedCases}</p>
                  <p className="casesConfirmed">cases confirmed</p>
                </div>
              </div>
            ))
          )
          : populate}
      </div>
    </div>

  );
};

export default ListItems;
