import React from 'react';
import ReactDOM from 'react-dom';
import StopWatch from './StopWatch';
import CounterButton from './CounterButton';
import Tilt from './VnillaTilt';
import StopWatchReducer from './StopWatchReducer';
import StopWatchReducer2 from './StopWatchReducer2';
import StopWatchReducerHook from './StopWatchReducerHook';

function App() {
  return (
    <React.Fragment>
      <CounterButton />
      <hr />
      <StopWatch />
      <hr />
      <Tilt />
      <hr />
      <StopWatchReducer />
      <hr />
      <StopWatchReducer2 />
      <hr />
      <StopWatchReducerHook />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('⚛️'));

module.hot.accept();
