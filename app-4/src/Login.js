import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            user: '',
            password: ''
        }
        this.user = this.user.bind(this)
        this.password = this.password.bind(this)
        this.alert = this.alert.bind(this)
    }

    user(val) {
        this.setState({
            user: val
        })
    }

    password(val) {
        this.setState({
            password: val
        })
    }

    alert(val) {
        alert(`Password:  ${this.state.user}  Username: ${this.state.password}`)
    }


    render() {
        return(
            <div>
                <span>Username: <input onChange={(event) => this.user(event.target.value)} name="user" /> </span>
                <span>Password: <input onChange={(event) => this.password(event.target.value)} name="password" /> </span>
                <button onClick={this.alert}>Login</button>
            </div>
        )
    }
}

export default Login