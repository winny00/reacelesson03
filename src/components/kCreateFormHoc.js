import React, { useState, Component} from 'react'
const kCreateForm = Cmp => props => {
    const [state, setState] = useState({})
    const options = {}
    // 处理Input的change事件
    const handleChange = (event) => {
        const {name,value} = event.target
        setState({
            ...state,
            [name]:value
        })
        // this.setState({
        //     [event.target.name]: event.target.value
        // })
    }
    // 处理input高阶组件
    const getFieldDecorator = (field, option) => {
        options[field] = option;
        // 由React.createElement生成的元素不能修该，需要克隆一份再扩展
        return InputCmp => {
            return <React.Fragment>
                {React.cloneElement(InputCmp, {
                    name: field,
                    value: state[field] || '', // 控件值
                    onChange: handleChange // 控件change事件处理
                })}
            </React.Fragment>
        }
    }
    // 得到所有value
    const getFieldsValue = () => {
        return { ...state }
    }
    // 得到key为field的value
    const getFieldValue = (field) => {
        return state[field]
    }
    // 校验
    const validateFields = callback => {
        const res = { ...state };
        const err = [];
        for (const item in options) {
            if (res[item] === undefined) {
                err.push({ [item]: 'error' })
            } else {

            }
        }
        if (err.length) {
            callback(err, { ...res })
        } else {
            callback(undefined, { ...res })
        }
    }
    return (
        <Cmp
            {...props}
            getFieldDecorator={getFieldDecorator}
            getFieldsValue={getFieldsValue}
            getFieldValue={getFieldValue}
            validateFields={validateFields}
        />
    )
}

export default kCreateForm;
// export default function kCreateForm(Cmp) {
    
    
// }
