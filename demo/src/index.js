import './interceptListeners';
import React from 'react';
import { storiesOf } from '@storybook/react';
import * as S from './styles';

import { WindowSize } from 'react-window-bigness';

class Story extends React.Component {
  state = {
    count: 1,
  }

  incrementCount = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  }

  render() {
    return (
      <S.Wrap>
        <S.GlobalStyle />
        {new Array(this.state.count).fill(1).map((_, index) => (
          <div key={index}>
            <WindowSize>
              {(windowSize) => JSON.stringify(windowSize)}
            </WindowSize>
          </div>
        ))}
        <button onClick={this.incrementCount}>Add WindowSize Component</button>
        {JSON.stringify({ WindowSizeComponents: this.state.count, resizeListeners: window.allListeners.resize })}
      </S.Wrap>
    );
  }
}

storiesOf('WindowSize', module).add('demo', () => <Story />);

