import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Input, List, Tooltip } from 'antd';
import { SomeTodo } from '../SomeTodo';
import { useService } from '../Hooks';
import { observer } from 'mobx-react';
import { InfoCircleOutlined, ScheduleOutlined, UserOutlined } from '@ant-design/icons';
import {Redirect, useHistory} from 'react-router-dom';
import { Button, notification, Space } from 'antd';


export const EditPage = (props:any) => {
  const history = useHistory();

  const [title, setTitle] = useState(props.location.state.title);

  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Information',
      description:
        `id: ${props.location.state.id},
         complete: ${props.location.state.completed}`,
    });
  };

  const editTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return(
    <>
      <h1>Edit task</h1>
      <Button type="primary" onClick={() => history.push('/')}>Back to main list</Button>
      <br />
      <br />
      <Input
        onChange={editTitle}
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
        <Button onClick={()=>console.log(title)} type="primary">Save</Button>
        <Button onClick={() => openNotificationWithIcon('info')}>Info about task</Button>
      </Space>
    </>
  )
}