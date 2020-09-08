import React, { Component } from 'react'

export default class CommentListPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            commentList: []
        }
    }
    componentDidMount() {
        this.timer = setInterval(()=>{
            this.setState({
                commentList: [
                    { id: 0, author: '小明', body: '这是小明写的文章' },
                    { id: 1, author: '小呀', body: '这是小呀写的文章' }
                ]
            })
        },1000)
    }
    componentWillUnmount() {
        this.timer && clearInterval(this.timer)
    }
    
    render() {
        const { commentList } = this.state;
        console.log('CommentListPage:render')
        return (
            <div>
                <h1>CommentListPage</h1>
                {
                    commentList.map(item=>{
                        return <Comment key={item.id} data={item}/>
                    })
                }
            </div>
        )
    }
}

class Comment extends Component{
    shouldComponentUpdate(nextProps, nextState) {
        // console.log('shouldComponentUpdate--->', nextProps, nextState)
        // 返回值为 ture 才执行willUpdate\didUpdate
        const { author, body } = this.props.data;
        const { author: newAuthor, body: newBody } = nextProps.data;
        if ((author === newAuthor) && (body === newBody)) {
            return false
        }
        return true;
    }
    render() {
        console.log('comment render')
        const {author,body} = this.props.data;
        return (
            <div className="border">
                <p>{author}</p>
                <p>{body}</p>
            </div>
        )
    }
}
