import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import styles from './countriesitem.module.css';

const CountriesItem = ({
  id, name, todayOpenCases, map,
}) => (
  <li>
    <NavLink
      to={`/details/${id}`}
      exact
    >
      <div className={styles.container}>
        <BsArrowRightCircle className="float-right" />
        <img className={styles.shape} src={map} alt={`${name} map`} />
        <div className="text-right">
          <h3 className="uppercase">{name}</h3>
          <p>
            {todayOpenCases}
            {' '}
            open cases
          </p>
        </div>
      </div>
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
