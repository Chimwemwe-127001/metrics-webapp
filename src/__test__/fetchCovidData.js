import fetchData from '../__mocks__/mockApi';

const fetchCovidData = () => fetchData()
  .then((covid) => {
    const selectedData = [];
    covid.forEach((covid) => {
      selectedData.push({
        cases: covid.cases,
        name: covid.name,
        allDeaths: covid.allDeaths,
        recovered: covid.recovered,
      });
    });
    return selectedData;
  });

export default fetchCovidData;
