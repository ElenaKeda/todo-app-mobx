import React from 'react';
import 'antd/dist/antd.css';
import { Button, Checkbox } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ITodo } from '../interfaces';
import { observer } from 'mobx-react';
import { Link, Redirect } from 'react-router-dom'


export const SomeTodo = observer(({todo, onRemove, onChecked}:{todo:ITodo, onRemove:any, onChecked:any}) => {

	return (
		<div className="wrapper">
			<div className="todo-wrapper">
				<Checkbox 
					checked={todo.completed}
					onChange={() => onChecked(todo)}>
					<span
							className={todo.completed ? 'completed' : undefined}>
							{todo.title}
					</span>
				</Checkbox>
			</div>
			<div className="btn-wrapper">
				<Button 
					onClick={() => onRemove(todo)}
					shape="circle"
					danger>
					<DeleteOutlined />
				</Button>
				<Link to={`/todo/${todo.id}`} >
					<Button 
						onClick={() => console.log(todo.title, todo.id)}
						shape="circle"
						danger>
						<EditOutlined />
					</Button>
				</Link>
			</div>
		</div>
	)
})

