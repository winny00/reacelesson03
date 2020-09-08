import React, { Component } from 'react';
// 传送门  react v16之后出现的portal可以实现内容传送功能
// Dialog挂载到body上
import { createPortal } from "react-dom";

export default class Dialog extends Component {
    constructor(props) {
        super(props)
    
        const doc = window.document;
        this.node = doc.createElement('div');
        doc.body.appendChild(this.node)
    }
    componentWillUnmount() {
        window.document.body.removeChild(this.node)
    }
    render() {
        return createPortal(
            <div className="dialog">
                <h1>Dialog</h1>
            </div>, this.node,
        )
    }
}
