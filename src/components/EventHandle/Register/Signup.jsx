import React from "react";
import "./style.css"
import { Component } from "react";


class Signup extends Component{
    render(){
        return(
            <div className="wrapper">
                <form action="">
                    <h1>Signup</h1>
                    <div className="input">
                        <label htmlFor="name">Enter your userName</label>
                        
                        <input type="text" id="name" placeholder="Username" />
                    </div>
                    <div className="input">
                        <label htmlFor="email">Enter your email</label>
                        
                        <input type="email" id="email" placeholder="E-mail" />
                    </div>
                    <div className="input">
                        <label htmlFor="pass">Enter your Password</label>
                    
                        <input type="password" id="pass" placeholder="Password" />
                    </div>
                    
                    <button type="submit">Signup</button>
                    <div className="haveAccount">
                        <p>Already have an account <a href="#">Login</a></p> 
                    </div>
                </form>
            </div>
    
        )    }
}
export default Signup;
