import React,{Component} from 'react';
import logo from '../logo.svg';
import Axios from 'axios';

class LoginPage extends Component {
    state= {
        error: null
    }
    onSubmit = (event)=>{
        event.preventDefault();
        const data = {
            userName: event.target["userName"].value,
            password: event.target["password"].value,
            FCM: '1'
        }
        Axios.post('http://localhost:3000/login',data)
        .then(response=>{
            if (response.data.success){
                localStorage.setItem('loginData',JSON.stringify(data));
                window.location = '/profile';
            }else {
                this.setState({error: true})
            }
        })
    }


    onChange = ({target:{name,value}})=>{
        this.setState({[name]:value})
    }

    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Sign In Page
                </p>
                <form onSubmit={this.onSubmit}>
                    <input style={{color:RegExp(/\d/g).test(this.state.userName)?'red':'black'}} name="userName" type="text" value={this.state.userName} onChange={this.onChange}/><br></br>
                    <input name="password" type="password"/><br></br>
                    <button type="submit">Sign In</button>
                </form>
                {this.state.error && <p style={{color:'red'}}>Login failed</p>}
            </header>
        )
    }
}

export {LoginPage}