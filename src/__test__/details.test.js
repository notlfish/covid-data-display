import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import store from '../redux/configureStore';
import { fetchSAData } from '../redux/covid/covid';
import Details from '../pages/Details';

jest.mock('../utils/stats-api');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteMatch: () => ({ params: { slug: 'argentina' } }),
}));

describe('Details snapshot test', () => {
  it('Details page matches snapshot', async () => {
    await store.dispatch(fetchSAData());
    const history = createMemoryHistory();
    history.push('/details/argentina');
    const detailsPage = renderer
      .create(<Provider store={store}><Router history={history}><Details /></Router></Provider>)
      .toJSON();
    expect(detailsPage).toMatchSnapshot();
  });
});
