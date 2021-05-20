import React, { useState, useMemo } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { Header } from './components/Header';
import { Service }   from './components/Service';
import { observer } from 'mobx-react';


const App = observer (() => {
  const service = useMemo(() => new Service(), [])

  const addTitle = (title:string) => {service.createTodo(title)}

  const removeTodo = (id:number) => {service.deleteTodo(id)}

  const checkedTodo = (id:number) => {service.completeTodo(id)}

  return (
    <div className="App">
      <Header />
      <div className="main-wrapper">
        <div className="container">
          <TodoInput onAdd={addTitle}/>
          <TodoList todos={service.todos} onRemove={removeTodo} onChecked={checkedTodo}/>
          {/* <TodoList todos={todos} onRemove={removeTodo} onChecked={checkedTodo}/> */}
        </div>
      </div>
    </div>
  );
})

export default App;
