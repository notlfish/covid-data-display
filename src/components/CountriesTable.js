import { shallowEqual, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CountriesItem from './CountriesItem';

const CountriesTable = ({ keyword }) => {
  const countries = useSelector((state) => state.covidSA.countries, shallowEqual)
        .filter(({ name }) => name.toLowerCase().includes(keyword));


  return (
    <ul>
      {countries.map(({
        id, name, today_open_cases: todayOpenCases, map,
      }) => (
        <CountriesItem
          key={id}
          id={id}
          name={name}
          todayOpenCases={todayOpenCases}
          map={map}
        />
      ))}
    </ul>
  );
};

CountriesTable.propTypes = {
  keyword: PropTypes.string.isRequired,
}

export default CountriesTable;
