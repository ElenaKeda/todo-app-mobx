import React from 'react';
import 'antd/dist/antd.css';
import { List, Button, Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { ITodo } from '../interfaces';



const SomeTodo = ({todo, onRemove, onChecked}:{todo:ITodo, onRemove:any, onChecked:any}) => {
	console.log('sometodo', todo)
	return (
		<div className="wrapper">
			<div className="todo-wrapper">
				<Checkbox 
					onChange={() => onChecked(todo.id)}>
					<span
							className={todo.completed ? 'completed' : undefined}>
							{todo.title}
					</span>
				</Checkbox>
			</div>
			<div className="btn-wrapper">
				<Button 
					onClick={() => onRemove(todo.id)}
					shape="circle"
					danger>
					<DeleteOutlined />
				</Button>
			</div>
		</div>
	)
}

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


