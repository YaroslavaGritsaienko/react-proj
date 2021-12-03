import React from 'react';
import {Form, Input, Button} from 'antd';

//
export const ToDoForm = (props) => {
    const {onSubmit, onRemoveChecked} = props;
    const [form] = Form.useForm();
    const onFinish = (values) => {
        if (onSubmit && checkItems(values.desc, values.title) && checkTitle(values.title)) {
            onSubmit(values.title, values.desc);
            form.resetFields();
        }
        form.resetFields();
    }

    const checkTitle = (title) => {
        if (title[0] === title[0].toUpperCase() && title[0].match(/[a-z]/i)) {
            return true
        }
        return false;
    };
    const checkItems = (item1, item2) => {
        if (item1.length >= 3 && item2.length >= 3) {
            return true
        } else {
            return false
        }
    }

    return (
        <Form className="todo-form" form={form} layout={'inline'} onFinish={onFinish}>
            <Form.Item name="title" className="todo-form-input">
                <Input placeholder={'New todo`s title'}/>
            </Form.Item>
            <Form.Item name="desc" className="todo-form-input">
                <Input placeholder={'New todo`s desc'}/>
            </Form.Item>
            <Form.Item className="todo-form-actions">
                <Button htmlType="submit" type="primary">Add</Button>
            </Form.Item>
            <Form.Item className="todo-form-actions">
                <Button danger htmlType="submit" type="primary" onClick={onRemoveChecked}>Remove checked</Button>
            </Form.Item>
        </Form>
    )
}