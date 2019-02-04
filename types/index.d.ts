declare module 'react-window-bigness' {
  import * as React from 'react';

  interface InjectedWindowSizeProps {
    windowWidth: number;
    windowHeight: number;
  }

  interface WindowSizeProps {
    children: (windowSize: InjectedWindowSizeProps) => React.ReactNode;
  }

  export class WindowSize extends React.Component<WindowSizeProps> {}

  export type withWindowSize = (ComposedComponent: React.ComponentType<any>) => React.ComponentClass<InjectedWindowSizeProps & any>
}
