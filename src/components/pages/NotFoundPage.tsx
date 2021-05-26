import React from 'react';
import 'antd/dist/antd.css';
import { Button, Result } from "antd"
import { useHistory } from 'react-router';
import { observer } from 'mobx-react';

export const NotFound = observer(() => {
  const history = useHistory();
  return (    
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={() => history.push('/todo')}>Back Home</Button>}
    />
  )
  
})