import React from 'react';
import 'antd/dist/antd.css';
import { Button, Result } from "antd"
import { useHistory } from 'react-router';

export const NotFound = () => {
  const history = useHistory();
  return (    
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={() => history.push('/')}>Back Home</Button>}
    />
  )
  
}