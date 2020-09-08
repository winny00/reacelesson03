import React, { Component } from 'react'
import kCreateForm from '../components/kCreateForm'
import kCreateFormHoc from '../components/kCreateFormHoc'

const nameRules = {
    required: true,
    message: 'please input ur name'
}
const passwordRules = {
    required: true,
    message: 'please input ur password'
}
@kCreateFormHoc
class MyFormPage extends Component {
    submit = ()=>{
        const { getFieldsValue, getFieldValue, validateFields} = this.props;
        console.log('submit', getFieldsValue(), getFieldValue('name'))
        validateFields((err, values) => {
            if (err) {
                console.log('err', err)
            } else {
                console.log('submit--->', values)
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props;
        console.log('props',this.props)
        return (
            <div>
                <h1>MyFormPage</h1>
                {
                    getFieldDecorator('name', { rules: [nameRules] })(<input placeholder="name" />)
                }
                <br/>
                {
                    getFieldDecorator('password', { rules: [passwordRules] })(<input placeholder="password"/>)
                }
                <br/>
                <button onClick={this.submit}>submit</button>
            </div>
        )
    }
}
export default MyFormPage;