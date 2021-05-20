import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { Header } from './components/Header';
import { observer } from 'mobx-react';


const App = observer(() => {
  console.count('app render');

  return (
      <div className="App" >
        <Header />
        <div className="main-wrapper">
          <div className="container">
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
  );
})

export default App;
