import React from 'react';
import 'antd/dist/antd.css';
import { List } from 'antd';
import { SomeTodo } from './SomeTodo';
import { useService } from './Hooks';
import { observer } from 'mobx-react';


export const TodoList = observer(() => {
	console.count('list render');
	const todoList = useService();
	return (
		<List
			size="large"
			bordered
			dataSource={todoList.todos}
			renderItem={todo => <List.Item key={todo.id}>
					<SomeTodo todo={todo} onRemove={todoList.deleteTodo} onChecked={todoList.completeTodo} />

				</List.Item>}
		/>
	)
})


