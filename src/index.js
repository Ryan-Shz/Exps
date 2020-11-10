import React from 'react';
import ReactDOM from 'react-dom';

import Game from './pages/game/game'
import TodoList from './pages/todolist/todolist'

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);
