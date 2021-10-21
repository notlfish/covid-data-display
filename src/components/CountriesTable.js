import { shallowEqual, useSelector } from 'react-redux';
import CountriesItem from './CountriesItem';

const CountriesTable = () => {
  const countries = useSelector((state) => state.covidSA.countries, shallowEqual);

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

export default CountriesTable;
