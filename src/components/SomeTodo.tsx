import React from 'react';
import 'antd/dist/antd.css';
import { Button, Checkbox } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ITodo } from '../interfaces';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom'
import { EditPage } from './pages/EditPage';


export const SomeTodo = observer(({todo, onRemove, onChecked}:{todo:ITodo, onRemove:any, onChecked:any}) => {
console.log('sometodo');
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
				<Link to={{
						pathname: "/edit",
						state: { title: todo.title, id: todo.id, completed: todo.completed}
				}} >
					<Button 
						onClick={() => console.log(todo.title)}
						shape="circle"
						danger>
						<EditOutlined />
					</Button>
				</Link>
			</div>
		</div>
	)
})

