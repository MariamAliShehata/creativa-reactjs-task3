import React, { Component } from "react";


class Counter extends Component{
    constructor(){
        super();
        this.state = {
            num: 1 ,
        }
    }
    increment(){
        this.setState({
            num:  this.state.num +1,
        });
    }
    

    decrement(){
        if(this.state.num !== 1){
            this.setState({
                num: this.state.num -1,
            })
        }
    }
    render(){
        return(
            <div style={{textAlign: 'center'}}>
                <button onClick={()=>{this.increment()}} style={{padding: "10px 20px",margin:"5px",
                    borderRadius:"15px",fontSize:"15px",backgroundColor:"green", border: "1px solid #ccc", cursor: 'pointer'}}>
                    +
                </button>
                <span style={{margin:"30px"}}>{this.state.num}</span>
                <button onClick={()=>{this.decrement()}}style={{padding: "10px 20px",margin:"5px",
                    borderRadius:"15px",fontSize:"15px",backgroundColor:"red",border: "1px solid #ccc", cursor: 'pointer'}}>
                        -
                </button>
            </div>
        )
    }
    
}
export default Counter;