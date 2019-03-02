import React,{Component} from 'react';
import logo from '../logo.svg';
// import {Link} from 'react-router-dom';

class ProfilePage extends Component {
    logout=()=>{
        localStorage.removeItem('loginData');
        window.location="/login";
    }
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Welcome; Mohammad
                </p>
                <button onClick={this.logout}>Logout</button>
            </header>
        )
    }
}

export {ProfilePage}