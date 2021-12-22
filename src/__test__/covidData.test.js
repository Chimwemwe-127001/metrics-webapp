import '@testing-library/jest-dom/extend-expect';
import fetchData from '../__mocks__/mockApi';
import fetchCovidData from './fetchCovidData';

describe('test fetching countries', () => {
  it('test fetching country name', async () => {
    await fetchCovidData().then((data) => {
      expect(data[0].name).toBe('Afghanistan');
    });
  });
  it('test fetch deaths', async () => {
    await fetchData().then((data) => {
      expect(data[0].allDeaths).toBe(30259);
    });
  });
  it('test fetch covid cases', async () => {
    await fetchData().then((data) => {
      expect(data[0].confirmedCases).toBe(157215);
    });
  });
  it('test fetch recovered', async () => {
    await fetchData().then((data) => {
      expect(data[0].recovered).toBe(1234);
    });
  });
});

describe('test fetching countries', () => {
  it('test fetching country name', async () => {
    await fetchCovidData().then((data) => {
      expect(data[1].name).toBe('Albania');
    });
  });
  it('test fetch deaths', async () => {
    await fetchData().then((data) => {
      expect(data[1].allDeaths).toBe(3049);
    });
  });
  it('test fetch covid cases', async () => {
    await fetchData().then((data) => {
      expect(data[1].confirmedCases).toBe(157015);
    });
  });
  it('test fetch recovered', async () => {
    await fetchData().then((data) => {
      expect(data[1].recovered).toBe(12324);
    });
  });
});
