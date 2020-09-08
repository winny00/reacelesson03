import React, { Component } from 'react'
import { Input, Button } from 'antd'
import { Form } from '@ant-design/compatible';
// 选用兼容v3的版本写法，后面再写个v4的
const nameRules = {
    required: true,
    message: 'please input ur name'
}
const passwordRules = {
    required: true,
    message: 'please input ur password'
}
@Form.create()
class FormPageAntd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            password: ''
        }
    }

    submit = () => {
        const { getFieldsValue, getFieldValue, validateFields} = this.props.form;
        validateFields((err,values)=>{
            if(err) {
                console.log('err',err)
            } else {
                console.log('submit--->', values)
            }
        })
        // console.log('submit--->', getFieldsValue(), getFieldValue('name'))
    }
    render() {
        console.log('props',this.props)
        const { getFieldDecorator} = this.props.form;
        return (
            <div>
                <h1>FormPageAntd</h1>
                <Form>
                    <Form.Item label="姓名">
                        {
                            getFieldDecorator('name', { rules: [nameRules]})(<Input />)
                        }
                        
                    </Form.Item>
                    <Form.Item label="密码">
                        {
                            getFieldDecorator('password', { rules: [passwordRules]})(<Input type="password" />)
                        }
                        
                    </Form.Item>
                </Form>
                <Button onClick={this.submit}>submit</Button>
            </div>
        )
    }
}
export default FormPageAntd
