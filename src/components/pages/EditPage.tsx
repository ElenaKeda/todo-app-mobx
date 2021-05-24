import React from 'react';
import 'antd/dist/antd.css';
import { Input, List, Tooltip } from 'antd';
import { SomeTodo } from '../SomeTodo';
import { useService } from '../Hooks';
import { observer } from 'mobx-react';
import { InfoCircleOutlined, ScheduleOutlined, UserOutlined } from '@ant-design/icons';
import {Redirect} from 'react-router-dom';
import { Button, notification, Space } from 'antd';

export const EditPage = (props:any) => {

  const openNotificationWithIcon = type => {
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
        <Input
          onChange={()=>console.log(props.location)}
          value={props.location.state.title}
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
          <Button onClick={() => openNotificationWithIcon('info')}>Info about task</Button>
        </Space>
    </>
  )
}