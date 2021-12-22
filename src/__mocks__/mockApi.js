const fetchData = () => Promise.resolve([{
  name: 'Afghanistan',
  allDeaths: 30259,
  confirmedCases: 157215,
  recovered: 1234,
},
{
  name: 'Albania',
  allDeaths: 3049,
  confirmedCases: 157015,
  recovered: 12324,
},
]);

export default fetchData;
