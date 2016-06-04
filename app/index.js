import React from 'react';
import { render } from 'react-dom';
import TodoApp from './TodoApp';

render (
  <TodoApp />,
  document.getElementById('container')
);

/*
 // HelloWorld Example
import { HelloWorldState } from './HelloWorld';

render (
  <HelloWorldState />,
  document.getElementById('container')
);
*/