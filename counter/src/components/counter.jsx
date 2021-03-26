import React, {Component} from 'react'
import { render } from 'react-dom'

class Counter extends Component{
state = {
    count: 0
};

increment=()=>{
this.setState({count: this.state.count +1})
}
decrement=()=>{
this.setState({count: this.state.count -1})
}
currentVal=()=>{
    return this.state.count === 0 ? 'Zero' : this.state.count;
    }
resetCount=()=>{
    this.setState({count: 0})
}


render(){
return (
<div>
<span className ="badge badge-primary m-2">{this.currentVal()}</span>
<button className= "btn btn-success btn-sm" onClick = {this.increment}>+</button>
<button className= "btn btn-danger btn-sm" onClick = {this.decrement}>-</button>
<button className= "btn btn-warning btn-sm" onClick = {this.resetCount}>Reset</button>
</div>
    )}
}
export default Counter