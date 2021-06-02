import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { observer } from 'mobx-react';
import axios from 'axios';
import { Descriptions, List } from 'antd';
import { useInterval } from '../Hooks';
import { ITodosFetch } from '../../interfaces';


export const FetchPage = observer(() => {

  const [todos, setTodos] = useState<ITodosFetch[]>([]);
  
  const getList = () => {
    
    axios
      .get('https://jsonplaceholder.typicode.com/todos',{
        params: {
          _start: Math.round(1 + Math.random() * 199),
          _limit: 3
        }
      })
      .then(res => {
        setTodos(res.data);
        console.count('setinterval')})
      .catch(err => console.log(err));
  };

  useInterval(getList, 3000)
  
  return (
      <div>
        <List
          bordered
          dataSource={todos}
          renderItem={todo => (
            <List.Item key={todo.id}>
              <Descriptions title="Todo Info">
                <Descriptions.Item label="userId">{todo.userId}</Descriptions.Item>
                <Descriptions.Item label="id">{todo.id}</Descriptions.Item>
                <Descriptions.Item label="completed">{String(todo.completed)}</Descriptions.Item>
                <Descriptions.Item label="title">{todo.title}</Descriptions.Item>
              </Descriptions>
            </List.Item>
          )}
        />
      </div>
    );
})