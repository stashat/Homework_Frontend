
import React from 'react';
import { Layout, Menu } from 'antd';
import {
    SmileOutlined,
    PieChartOutlined,
    ContactsOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from './Dashboard'
import Contact from './Contact'
import RickMorty from './RickMorty'
import auth from '../auth'

const { Header, Content, Sider } = Layout;



class LayoutPage extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<PieChartOutlined />}>
                                <Link to='/dashboard'>Dashboard</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<ContactsOutlined />}>
                                <Link to='/dashboard/contact-us'>Contact us</Link>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<SmileOutlined />}>
                                <Link to='/dashboard/rick-morty'>Rick and Morty</Link>
                            </Menu.Item>
                            <Menu.Item key="4" icon={<LogoutOutlined />} onClick={() => {
                                auth.logout(() => {
                                    this.props.history.push('/')
                                    alert('You are logged out!')
                                })
                            }}>
                                Log Out
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }} />
                        <Content style={{ margin: '0 16px' }}>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                                <Switch>
                                    <Route path="/dashboard" exact component={Dashboard} />
                                    <Route exact path="/dashboard/contact-us" component={Contact} />
                                    <Route exact path="/dashboard/rick-morty" component={RickMorty} />
                                </Switch>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default LayoutPage;