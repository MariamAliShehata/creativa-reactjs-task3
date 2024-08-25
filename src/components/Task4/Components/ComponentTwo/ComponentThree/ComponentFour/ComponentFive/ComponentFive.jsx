import React, { Component } from "react";
import { UserConsumer } from "../../../../../../../Context/UserContext";

class ComponentFive extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {(value) => {
                return (
                <div>
                    <h5>Component Five with the {value}</h5>
                </div>
                );
                }}
            </UserConsumer>
            </div>
        );
    }
}
export default ComponentFive;