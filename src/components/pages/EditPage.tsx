import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Input, List, Tooltip } from 'antd';
import { useService } from '../Hooks';
import { observer } from 'mobx-react';
import { InfoCircleOutlined, ScheduleOutlined, UserOutlined } from '@ant-design/icons';
import { useHistory} from 'react-router-dom';
import { Button, notification, Space } from 'antd';


export const EditPage = observer((props:any) => {
  const history = useHistory();

  const [title, setTitle] = useState<string>(props.location.state.title);

	const todoList = useService();

	const editTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};

  const openNotificationWithIcon = (type:any) => {
    notification[type]({
      message: 'Information',
      description:
        `id: ${props.location.state.id},
         complete: ${props.location.state.completed}`,
    });
  };

  return(
    <>
      <h1>Edit task</h1>
      <Button type="primary" onClick={() => history.push('/')}>Back to main list</Button>
      <br />
      <br />
      <Input
        onChange={editTodo}
        value={title}
        placeholder="Edit your task"
        prefix={<ScheduleOutlined className="site-form-item-icon" />}
        suffix={
          <Tooltip title={`id:${props.location.state.id}`}>
            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
          </Tooltip>
        }
      />
      <br />
      <br />
      <Space>
        <Button onClick={()=>todoList.editTodo(props.location.state, title)} type="primary">Save</Button>
        <Button onClick={() => openNotificationWithIcon('info')}>Info about task</Button>
      </Space>
    </>
  )
})