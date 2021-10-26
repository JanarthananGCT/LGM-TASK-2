import Users from "./Component/userCard";
import "./App.css";

import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { users_data: [], loading: true };

        this.updateState = this.updateState.bind(this);
    }

    updateState() {
        document.getElementById("main").style.display = "inline-block";
        const link = "https://reqres.in/api/users?page=1";
        fetch(link)
            .then((response) => response.json())
            .then((users) => {
                this.setState({ users_data: users.data, loading: false });
                console.log(users.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <div className="home">
                <nav className="navbar navbar-light bg-light justify-content-between">
                    <h1 className="navbar-brand" id="logo">Dev Tech</h1>
                    <button className="btn btn-outline-primary my-2 my-sm-0" onClick={this.updateState} >Get Users</button>
                </nav>
                <div className="container">
                    <Users loading={this.state.loading} users={this.state.users_data} />
                </div>
            </div>
        );
    }
}

export default App;

