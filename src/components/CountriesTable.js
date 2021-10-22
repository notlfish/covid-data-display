import { shallowEqual, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CountriesItem from './CountriesItem';
import styles from './countriestable.module.css';

const CountriesTable = ({ keyword }) => {
  const countries = useSelector((state) => state.covidSA.countries, shallowEqual)
    .filter(({ name }) => name.toLowerCase().includes(keyword));

  return (
    <ul className={`${styles.countriesList} bg-pink-even`}>
      {countries.map(({
        id, name, activeCases, map,
      }) => (
        <CountriesItem
          key={id}
          id={id}
          name={name}
          todayOpenCases={activeCases}
          map={map}
        />
      ))}
    </ul>
  );
};

CountriesTable.propTypes = {
  keyword: PropTypes.string.isRequired,
};

export default CountriesTable;
