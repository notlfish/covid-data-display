import fetchTodayData from '../../utils/stats-api';

const FETCH_SA_DATA = 'covid-data-display/countries/FETCH_SA_DATA';
const ADD_SA_DATA = 'covid-data-display/countries/ADD_SA_DATA';
const API_SUCCESS = 'covid-data-display/countries/API_SUCCESS';
const API_FAILURE = 'covid-data-display/countries/API_FAILURE';

const initialSAData = {
  countries: [],
  loaded: false,
};

export const fetchSAData = () => (dispatch) => {
  dispatch({ type: FETCH_SA_DATA });
  return fetchTodayData().then(
    (countries) => {
      dispatch({ type: API_SUCCESS });
      dispatch({ type: ADD_SA_DATA, countries });
    },
    (error) => {
      dispatch({ type: API_FAILURE, error });
    },
  );
};

const covidSAReducer = (state = initialSAData, action) => {
  switch (action.type) {
    case ADD_SA_DATA:
      return {
        countries: [...state.countries, ...action.countries],
        loaded: true,
      };
    default:
      return state;
  }
};

export default covidSAReducer;
