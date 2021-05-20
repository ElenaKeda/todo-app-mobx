import React from 'react';
import 'antd/dist/antd.css';
import { List } from 'antd';
import { ITodo } from '../interfaces';
import { SomeTodo } from './SomeTodo';


export const TodoList = ({ todos, onRemove, onChecked}:{todos: ITodo[], onRemove:any, onChecked:any}) => {
	// const todos = service.todos;
	console.log('todolist')
	return (
		<List
			size="large"
			bordered
			dataSource={todos}
			renderItem={todo => <List.Item key={todo.id}><SomeTodo todo={todo} onRemove={onRemove} onChecked={onChecked} /></List.Item>}
		/>
	)
}


