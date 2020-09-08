import React, { Component ,memo} from 'react'

export default class ReactMemoPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            date:new Date(),
            counter: 0
        }
    }
    componentDidMount() {
        this.timer = setInterval(()=>{
            this.setState({
                date: new Date(),
            })
        },1000)
    }
    componentWillUnmount() {
        this.timer && clearInterval(this.timer)
    }
    render() {
        const {counter,date} = this.state;
        console.log('render',counter)
        return (
            <div>
                <h1>ReactMemoPage</h1>
                <p>{date.toLocaleTimeString()}</p>
                <MemoCounter counter={counter}/>
            </div>
        )
    }
}

const MemoCounter = memo(props => {
    console.log('MemoCounter')
    return (<div>{props.counter}</div>)
})
