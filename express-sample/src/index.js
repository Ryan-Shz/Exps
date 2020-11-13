import React from 'react';
import ReactDOM from 'react-dom';

import Game from './react/game/game'
import TodoList from './react/todolist/todolist'

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);
