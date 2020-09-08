import React, { Component } from 'react'
/*
function Child(props) {
    return <div className="borderClass">Child---</div>
}
*/
// 写法1
// const foo = Cmp =>{
//     return props=>{
//         return <Cmp {...props}/>
//     }
// }
// 写法2
const foo = Cmp =>  props => {
    return <div className="border"><Cmp {...props} /></div>
}
const foo2 = Cmp =>  props => {
    return <div className="border" style={{border:'1px solid blue'}}><Cmp {...props} /></div>
}
// 写法3 装饰器
// @foo
/*
class Child extends Component {
    render() {
        return <div className="borderClass">Child--装饰器-</div>
    }
}
*/
@foo
@foo2
class Child extends Component {
  render() {
    return <div className="border">CHild____good</div>;
  }
}
export default class HocPage extends Component {
    render() {
        // const Foo = foo(foo(Child));
        return (
            <div>
                <h1>HocPage</h1>
                {/* <Foo /> */}
                <Child />
            </div>
        )
    }
}
