import React from 'react';
import 'antd/dist/antd.css';
import { Button, Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { ITodo } from '../interfaces';


export const SomeTodo = ({todo, onRemove, onChecked}:{todo:ITodo, onRemove:any, onChecked:any}) => {

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