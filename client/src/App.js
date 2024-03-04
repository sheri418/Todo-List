import React, { Fragment } from 'react';
import './App.css';

import InputTodo from './component/InputTodo';
import ListTodo from './component/ListTodo';

function App() {
  return (
    <Fragment>
      <div className='Main_Container' style={{ backgroundColor: '#f8f8ff' }}>
      <div className='container'>
        <InputTodo />
        <ListTodo />
      </div>
      </div>
    </Fragment>
  );
}

export default App;
