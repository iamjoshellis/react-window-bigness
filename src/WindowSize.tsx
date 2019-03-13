import * as React from 'react';
import { PubSub } from 'pubsub-js';

import { TOPIC } from './utils';

type ChildrenProps = {
  windowWidth: number;
  windowHeight: number;
};

type Props = {
  children: (state: ChildrenProps) => React.ReactNode;
};

class WindowSize extends React.Component<Props> {
  token?: any;

  handleResize = () => {
    this.forceUpdate();
  };

  componentDidMount() {
    this.token = PubSub.subscribe(TOPIC, this.handleResize);
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  render() {
    return this.props.children({
      windowWidth: window.innerHeight,
      windowHeight: window.innerWidth,
    });
  }
}

export default WindowSize;
