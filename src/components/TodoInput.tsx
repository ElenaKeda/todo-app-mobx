import React, { useState } from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { useService } from './Hooks';
import { observer } from 'mobx-react';


export const TodoInput = observer(() => {
	const { Search } = Input;

	const [title, setTitle] = useState<string>('');
	const todoList = useService();

	const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};

	const onClickAdd = (title:string) => {
		todoList.createTodo(title);
		setTitle('')
	};

	return (
		<Search
			onChange={changeInput}
			value = {title}
			placeholder="Write a new task"
			enterButton="Add"
			size="large"
			onSearch={onClickAdd}
		/>
	)
})