import saCountries from './south-america';

const COVID_API_BASE_URL = 'https://api.covid19tracking.narrativa.com/api';
const FLAGS_API_BASE_URL = 'https://www.countryflags.io';
const MAPS_API_BASE_URL = 'https://raw.githubusercontent.com/djaiss/mapsicon/master/samerica';

const flagSrc = (iso) => {
  const options = 'flat/64.png';
  return `${FLAGS_API_BASE_URL}/${iso}/${options}`;
};

const mapSrc = (iso) => {
  const options = '64.png';
  return `${MAPS_API_BASE_URL}/${iso}/${options}`;
};

const today = () => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};

export const fetchDayData = async (day) => {
  const rawResponse = await fetch(`${COVID_API_BASE_URL}/${day}`);
  const covidResponse = await rawResponse.json();
  return saCountries.map(({ name, iso }) => {
    const covidData = covidResponse.dates[day].countries[name];
    return {
      ...covidData,
      map: mapSrc(iso),
      flag: flagSrc(iso),
    };
  });
};

export default () => fetchDayData(today());
