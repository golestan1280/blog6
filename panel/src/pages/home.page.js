import React,{Component} from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';
class HomePage extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Home page
                </p>
                <Link to="about" className="App-link">About</Link>
            </header>
        )
    }
}

export {HomePage}