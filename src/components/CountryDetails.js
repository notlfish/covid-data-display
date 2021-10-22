import { shallowEqual, useSelector } from 'react-redux';
import { Redirect, useRouteMatch } from 'react-router-dom';
import styles from './details.module.css';

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
    map,
    source,
    historicCases,
    historicDeaths,
    historicRecovered,
    newCases,
    activeCases,
    newDeaths,
    newRecovered,
  } = useSelector((state) => selectCountry(countryId, state.covidSA),
    shallowEqual);

  return (
    <div className={`${styles.mainContainer} bg-main-pink`}>
      <div className={`d-grid-two-cols align-v-center ${styles.infoHeader}`}>
        <img className={`${styles.flag} d-block`} src={map} alt={`${name} shape`} />
        <div className="text-left">
          <h1 className={`uppercase ${styles.countryName}`}>{name}</h1>
          <p>
            Active cases:
            {' '}
            {' '}
            {' '}
            {activeCases}
          </p>
        </div>
      </div>
      <div>
        <h2 className={`uppercase bg-pink-odd ${styles.sectionTitle}`}>Today&apos;s data</h2>
        <ul className={styles.stats}>
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
        <h2 className={`uppercase bg-pink-odd ${styles.sectionTitle}`}>Historic data</h2>
        <ul className={styles.stats}>
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
      <div>
        <h2 className={`uppercase bg-pink-odd ${styles.sectionTitle}`}>Source</h2>
        <ul className={styles.stats}>
          <li><p>{source}</p></li>
        </ul>
      </div>
    </div>
  );
};

export default CountryDetails;
