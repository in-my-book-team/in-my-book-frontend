import { render as RTLRender, RenderOptions } from '@testing-library/react';
import React, { ComponentType } from 'react';
import { BrowserRouter } from 'react-router-dom';

const combineWrappers = (
  Wrapper1: ComponentType<any>,
  Wrapper2?: ComponentType<any>,
): ComponentType<any> =>
  !Wrapper2
    ? Wrapper1
    : ({ children }) => (
        <Wrapper1>
          <Wrapper2>{children}</Wrapper2>
        </Wrapper1>
      );

const defaultWrapper = BrowserRouter;

export const render = (ui: React.ReactElement, options?: RenderOptions) =>
  RTLRender(ui, {
    ...options,
    wrapper: combineWrappers(defaultWrapper, options?.wrapper),
  });
