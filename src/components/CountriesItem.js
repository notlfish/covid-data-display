import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const CountriesItem = ({
  id, name, todayOpenCases, map,
}) => (
  <li>
    <NavLink
      to={`/details/${id}`}
      exact
    >
      <img src={map} alt={`${name} map`} />
      <h3>{name}</h3>
      <p>
        {todayOpenCases}
        {' '}
        open cases
      </p>
    </NavLink>
  </li>
);

CountriesItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  map: PropTypes.string.isRequired,
  todayOpenCases: PropTypes.number.isRequired,
};

export default CountriesItem;
