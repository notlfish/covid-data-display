import { shallowEqual, useSelector } from 'react-redux';
import { Redirect, useRouteMatch } from 'react-router-dom';

const selectCountry = (id, { countries }) => {
  for (let i = 0; i < countries.length; i += 1) {
    if (countries[i].id === id) return countries[i];
  }
  return null;
};

const CountryDetails = () => {
  const { params: { slug: countryId } } = useRouteMatch();
  const loaded = useSelector((state) => state.covidSA.loaded, shallowEqual);
  if (!loaded) return <Redirect to="/" />;

  const {
    name,
    flag,
    today_confirmed: historicCases,
    today_deaths: historicDeaths,
    today_recovered: historicRecovered,
    today_new_confirmed: newCases,
    today_open_cases: activeCases,
    today_new_deaths: newDeaths,
    today_new_recovered: newRecovered,
  } = useSelector((state) => selectCountry(countryId, state.covidSA),
    shallowEqual);

  return (
    <div>
      <div>
        <img src={flag} alt={`${name} flag`} />
        <h1>{name}</h1>
      </div>
      <div>
        <h2>Today&apos;s data</h2>
        <ul>
          <li>
            <p>Active cases</p>
            <p>{activeCases}</p>
          </li>
          <li>
            <p>New confirmed cases</p>
            <p>{newCases}</p>
          </li>
          <li>
            <p>Recovered patients</p>
            <p>{newRecovered}</p>
          </li>
          <li>
            <p>Deaths</p>
            <p>{newDeaths}</p>
          </li>
        </ul>
      </div>
      <div>
        <h2>Historic data</h2>
        <ul>
          <li>
            <p>Total cases</p>
            <p>{historicCases}</p>
          </li>
          <li>
            <p>Total recovered</p>
            <p>{historicRecovered}</p>
          </li>
          <li>
            <p>Total deaths</p>
            <p>{historicDeaths}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryDetails;
