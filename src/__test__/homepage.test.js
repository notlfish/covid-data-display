import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import store from '../redux/configureStore';
import { fetchSAData } from '../redux/covid/covid';
import Homepage from '../pages/Homepage';

jest.mock('../utils/stats-api');

describe('Homepage snapshot test', () => {
  it('Home page matches snapshot', async () => {
    await store.dispatch(fetchSAData());
    const history = createMemoryHistory();
    history.push('/');
    const homePage = renderer
      .create(<Provider store={store}><Router history={history}><Homepage /></Router></Provider>)
      .toJSON();
    expect(homePage).toMatchSnapshot();
  });
});

describe('Interaction tests', () => {
  it('Displayed countries change when using the search bar', async () => {
    const history = createMemoryHistory();
    history.push('/');
    render(<Provider store={store}><Router history={history}><Homepage /></Router></Provider>);
    const searchBar = screen.getByPlaceholderText('Type to search for a country by name');

    expect(screen.getByText('Argentina')).toBeInTheDocument();
    expect(screen.getByText('Brazil')).toBeInTheDocument();

    fireEvent.change(searchBar, { target: { value: 'Arg' } });

    expect(screen.getByText('Argentina')).toBeInTheDocument();
    expect(screen.queryByText('Brazil')).not.toBeInTheDocument();

    fireEvent.change(searchBar, { target: { value: '' } });

    expect(screen.getByText('Argentina')).toBeInTheDocument();
    expect(screen.getByText('Brazil')).toBeInTheDocument();
  });
});
