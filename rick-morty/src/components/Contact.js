import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
    },

};

class Contact extends React.Component {
    state = {}
    onFinish = (values) => {
        // console.log(values);

        axios.post(`https://jsonblob.com/api/jsonBlob`, { values })
            .then(res => {
                console.log(res)
                console.log(res.data)
            })

    };
    render() {
        return (
            <Form {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages} className="formPosition">
                <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'email']} label="Email" rules={[{ required: true, type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'message']} label="Message">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
          </Button>
                </Form.Item>
            </Form>);
    }
}

export default Contact;