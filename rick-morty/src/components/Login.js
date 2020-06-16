import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class Login extends React.Component {
    state = {}

    onFinish = (values) => {
        console.log('Received values of form: ', values);
    }

    render() {
        return (<Form
            name="normal_login"
            className="login-form formPos"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
        ><div className='formColor'>
                <Form.Item><h1>Login</h1></Form.Item>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
              </Button>
                </Form.Item></div>
        </Form>);
    }
}

export default Login;