import React from "react";
import "./style.css";
import { Component } from "react";

class CardCounter extends Component {
    constructor() {
        super();
        this.state = {
            count: 1,
        };
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
    }
    increment() {
        this.setState({
            count: this.state.count + 1,
        });
    }
    decrement() {
        if (this.state.count !== 1) {
            this.setState({
                count: this.state.count - 1,
            });
        }
        
    }
    render() {
        return (
            <div className="card-component">
                <button className="card-btn" onClick={this.decrement}>
                -
                </button>
                <span> {this.state.count} </span>
                <button className="card-btn" onClick={this.increment}>
                +
                </button>
            </div>
        );
    }}

    export default CardCounter;