import React, { Component } from "react";
import Signup from "./Signup";
import Login from "./Login";
import "./style.css"



class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            login: true,
        };
    }
    isLogedin = () => {
        this.setState({ login: true });
    };
    
    isSignedup = () => {
        this.setState({ login: false });
    };
    render() {
        return (
            <div className="wrapper">
                {this.state.login ? <Login /> : <Signup />}
                <button onClick={this.isLogedin}>Login</button>
                <button onClick={this.isSignedup}>Signup</button>
            </div>
        );
    }
    

}
export default Register;