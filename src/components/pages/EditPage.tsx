import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Input, List, Tooltip } from 'antd';
import { useService } from '../Hooks';
import { observer } from 'mobx-react';
import { InfoCircleOutlined, ScheduleOutlined, UserOutlined } from '@ant-design/icons';
import { Redirect, Route, RouteComponentProps, useHistory} from 'react-router-dom';
import { Button, notification, Space } from 'antd';
import { ITodo } from '../../interfaces';


export const EditPage = observer((props: RouteComponentProps<any>) => {

	const todoList = useService();
  const history = useHistory();
  
  const idTodo = props.match.params.id as string | undefined;

  const todoTodo = todoList.todos.find(todo => todo.id === idTodo);

  const [title, setTitle] = useState<string>(todoTodo.title);

	const editTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};

  const openNotificationWithIcon = () => {
    notification.info({
      message: 'Information',
      description:
        `id: ${idTodo},
        complete: ${todoTodo.completed}`,
    });
  };

  return(
    <>
      <h1>Edit task</h1>
      <Button type="primary" onClick={() => history.push('/todo')}>Back to main list</Button>
      <Button type="primary" onClick={() => console.log(idTodo, props)}>test</Button>
      <br />
      <br />
      <Input
        onChange={editTodo}
        value={title}
        placeholder="Edit your task"
        prefix={<ScheduleOutlined className="site-form-item-icon" />}
        suffix={
          <Tooltip title={`id:${idTodo}`}>
            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
          </Tooltip>
        }
      />
      <br />
      <br />
      <Space>
        <Button onClick={()=>todoList.editTodo(todoTodo, title)} type="primary">Save</Button>
        <Button onClick={() => openNotificationWithIcon()}>Info about task</Button>
      </Space>
    </>
  )
})