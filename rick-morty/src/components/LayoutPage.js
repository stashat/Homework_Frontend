import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    SmileOutlined,
    PieChartOutlined,
    ContactsOutlined,
} from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from './Dashboard'
import Contact from './Contact'
import RickMorty from './RickMorty'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


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
                                <Link to='/'>Dashboard</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<ContactsOutlined />}>
                                <Link to='/contact-us'>Contact us</Link>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<SmileOutlined />}>
                                <Link to='/rick-morty'>Rick and Morty</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }} />
                        <Content style={{ margin: '0 16px' }}>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                                <Switch>
                                    <Route path="/" exact component={Dashboard} />
                                    <Route path="/contact-us" component={Contact} />
                                    <Route path="/rick-morty" component={RickMorty} />
                                </Switch>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default LayoutPage;


