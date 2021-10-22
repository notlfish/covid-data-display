import reducer, { fetchSAData } from '../redux/covid/covid';

jest.mock('../utils/stats-api', () => ({
  __esModule: true, // this property makes it work
  default: async () => [1, 2, 3, 4, 5, 6],
}));

const FETCH_SA_DATA = 'covid-data-display/countries/FETCH_SA_DATA';
const ADD_SA_DATA = 'covid-data-display/countries/ADD_SA_DATA';
const API_SUCCESS = 'covid-data-display/countries/API_SUCCESS';
const API_FAILURE = 'covid-data-display/countries/API_FAILURE';

describe('Test action creators and reducer', () => {
  let dispatched = [];

  const dispatch = (val) => { dispatched.push(val); };

  beforeEach(() => {
    dispatched = [];
  });

  test('fetchSAData dispatches the correct actions', async () => {
    await fetchSAData()(dispatch);
    expect(dispatched[0].type).toEqual(FETCH_SA_DATA);
    expect(dispatched[1].type).toEqual(API_SUCCESS);
    expect(dispatched[2].type).toEqual(ADD_SA_DATA);
    expect(dispatched[2].countries).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('reducer appends fetched data to state', async () => {
    await fetchSAData()(dispatch);
    const addDataAction = dispatched[2];
    const init = { countries: [3, 2, 1], loaded: false };
    expect(reducer(init, addDataAction)).toEqual({
      countries: [3, 2, 1, 1, 2, 3, 4, 5, 6],
      loaded: true,
    });
  });

  test('reducer returns initial state when passed other actions', () => {
    const init = { countries: [3, 2, 1], loaded: false };

    const fetchAction = { type: FETCH_SA_DATA };
    const apiSuccessAction = { type: API_SUCCESS };
    const apiFailureAction = { type: API_FAILURE };

    expect(reducer(init, fetchAction)).toEqual(init);
    expect(reducer(init, apiSuccessAction)).toEqual(init);
    expect(reducer(init, apiFailureAction)).toEqual(init);
  });
});
