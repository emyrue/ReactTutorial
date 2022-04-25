import React from 'react';
import * as ReactDOM from 'react-dom/client';
import TodoContainer from './components/TodoContainer';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
);
