import React from 'react';
import ReactDOM from 'react-dom';
// import { Counter } from './components/Counter';
// import { HookApp } from './HookApp';
import { CounterWithCustomHook } from './components/CounterWithCustomHook';

ReactDOM.render(
    <CounterWithCustomHook />,
  document.getElementById('root')
);