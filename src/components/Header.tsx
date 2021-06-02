import React from 'react';
import 'antd/dist/antd.css';
import { Button, PageHeader } from 'antd'
import { Link } from 'react-router-dom';


export const Header = () => {
    return (
    <PageHeader
        onBack={() => window.history.back()}
        className="site-page-header"
        title="Todo for you"
        extra={[
            <Link to={`/fetchpage`} >
                <Button key="1">Open FetchPage</Button>
            </Link>
        ]}
    />
    )
}