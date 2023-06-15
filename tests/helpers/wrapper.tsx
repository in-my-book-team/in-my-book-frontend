import { render as RTLRender, RenderOptions } from '@testing-library/react';
import React, { ComponentProps, ComponentType, ReactElement } from 'react';
import { AppState } from '../../src/redux/rootReducer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

type TestWrapperOptions = {
  reduxState?: AppState;
};

const wrapComponents = (...components: ComponentType<any>[]) => {
  return components.reduce((WrappedComponent, CurrentComponent) => {
    return (props) => (
      <WrappedComponent>
        <CurrentComponent {...props} />
      </WrappedComponent>
    );
  });
};

export const getReduxWrapper =
  (
    reduxState: TestWrapperOptions['reduxState'] = {} as TestWrapperOptions['reduxState'],
  ): React.FC =>
  (props?: ComponentProps<any>): ReactElement => {
    const getReduxStore = configureMockStore([thunk]);
    const mockStore = getReduxStore(reduxState);

    return <Provider store={mockStore}>{props?.children}</Provider>;
  };

export const render = (
  ui: React.ReactElement,
  options?: RenderOptions & TestWrapperOptions,
) =>
  RTLRender(ui, {
    ...options,
    wrapper: wrapComponents(
      getReduxWrapper(options?.reduxState),
      BrowserRouter,
    ),
  });
