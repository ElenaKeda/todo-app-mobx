import React from 'react';
import 'antd/dist/antd.css';
import { TodoInput } from '../TodoInput';
import { TodoList } from '../TodoList';
import { observer } from 'mobx-react';


export const TodoPage = () => {
  return (
    <>
      <TodoInput />
      <TodoList />
    </>
  )
}