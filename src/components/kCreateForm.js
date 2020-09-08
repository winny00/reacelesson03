import React, { Component} from 'react'

export default function kCreateForm(Cmp) {
    
    return class extends Component {
        constructor(props) {
            super(props)

            this.state = {};
            this.options = {};
        }
        handleChange = (event)=>{
            console.log('handleChange')
            console.log(event)
            this.setState({
                [event.target.name]: event.target.value
            })
        }
        getFieldDecorator = (field,option)=>{
            console.log('getFieldDecorator')
            console.log(field, option)
            this.options[field] = option
            return InputCmp => {
                return <React.Fragment>
                    {React.cloneElement(InputCmp,{
                        name: field,
                        value: this.state[field] || '',
                        onChange:this.handleChange
                    })}
                </React.Fragment>
            }
        }
        getFieldsValue = ()=>{
            return {...this.state}
        }
        getFieldValue = (field) => {
            return this.state[field]
        }
        validateFields = callback => {
            const res = {...this.state};
            const err = [];
            for (const item in this.options) {
                if(res[item] === undefined) {
                    err.push({[item]:'error'})
                } else {
                     
                }
            }
            if(err.length) {
                callback(err,{...res})
            } else {
                callback(undefined,{...res})
            }
        }
        render() {
            return <Cmp 
                {...this.props} 
                getFieldDecorator={this.getFieldDecorator} 
                getFieldsValue={this.getFieldsValue}
                getFieldValue={this.getFieldValue}
                validateFields= { this.validateFields}
            />
        }
    }
}
