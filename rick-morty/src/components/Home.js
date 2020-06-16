import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'

const { Header, Content } = Layout;

class Home extends React.Component {
    state = {}
    render() {
        return (<Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1"><Link to='/dashboard'>Dashboard</Link></Menu.Item>
                    <Menu.Item key="2"><Link to='/login'>Login</Link></Menu.Item>

                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">
                    <h1>Home Page</h1></div>
            </Content>
        </Layout>);
    }
}

export default Home;