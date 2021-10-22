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

const getYesterdayDate = () => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  return yesterday.toISOString().split('T')[0];
};

export const fetchDayData = async (day) => {
  const rawResponse = await fetch(`${COVID_API_BASE_URL}/${day}`);
  const covidResponse = await rawResponse.json();
  return saCountries.map(({ name, iso }) => {
    const covidData = covidResponse.dates[day].countries[name];
    return {
      id: covidData.id,
      name: covidData.name,
      source: covidData.source,
      historicCases: covidData.today_confirmed,
      historicDeaths: covidData.today_deaths,
      historicRecovered: covidData.today_recovered,
      newCases: covidData.today_new_confirmed,
      activeCases: covidData.today_open_cases,
      newDeaths: covidData.today_new_deaths,
      newRecovered: covidData.today_new_recovered,
      map: mapSrc(iso),
      flag: flagSrc(iso),
    };
  });
};

export default () => fetchDayData(getYesterdayDate());
