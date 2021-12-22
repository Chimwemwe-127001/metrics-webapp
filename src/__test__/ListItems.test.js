import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import ListItems from '../components/ListItems';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('testing the app', () => {
  it('testing ListItems UI', () => {
    act(() => {
      render(
        <Provider store={store}>
          <ListItems />
        </Provider>, container,
      );
    });

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
