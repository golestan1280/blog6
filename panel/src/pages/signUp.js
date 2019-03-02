import React,{Component} from 'react';
import logo from '../logo.svg';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class SignUp extends Component {
    state= {
        error: null,
        msg:''
    }
    onSubmit = (event)=>{
        event.preventDefault();
        const data = {
            firstName: event.target["firstName"].value,
            lastName: event.target["lastName"].value,
            userName: event.target["userName"].value,
            password: event.target["password"].value,
            // sex: event.target["sex"].value,
            // avatar: event.target["avatar"].value,
            mobile: event.target["mobile"].value,
            FCM: '1'
        }
        // console.log("data: ");
        // console.log(data);
        Axios.post('http://localhost:3000/signup',data)
        .then(response=>{
            if (response.data.success){
                console.log("ressssult: " + response.data.success)
                this.setState({msg:"Submit OK!!!!!@@@@@@@@@@@@@"});
                // localStorage.setItem('loginData',JSON.stringify(data));
                // window.location = '/login';
            }else {
                console.log("ressssult1111: " + response.data.success)

                this.setState({error: true})
            }
        })
    }


    onChange = ({target:{name,value,type,checked}})=>{
        if(type==="checked"){
            this.setState({[name]:checked})

        }
        else{
            this.setState({[name]:value})

        }

    }

    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Sign Up Page
                </p>
                <p style={{color:"white"}}>{this.state.msg}</p>
                <form onSubmit={this.onSubmit}>
                    <label>firstName : </label>
                    <input name="firstName" type="text"/><br></br>

                    <label>lastName : </label>
                    <input name="lastName" type="text"/><br></br>

                    <label>userName : </label>
                    <input style={{color:RegExp(/\d/g).test(this.state.userName)?'red':'black'}} name="userName" type="text" value={this.state.userName} onChange={this.onChange}/><br></br>
                   
                    <label>password : </label>
                    <input name="password" type="password"/><br></br>

                    {/* <label>sex : </label>
                    <input name="sex" type="checkbox"/><br></br> */}

                    {/* <label>avatar : </label>
                    <input name="avatar" type="text"/><br></br> */}

                    <label>mobile : </label>
                    <input name="mobile" type="Number"/><br></br>

                    <button type="submit">Sign Up</button>
                </form>
                <Link to="login" >Sign In</Link>
                {this.state.error && <p style={{color:'red'}}>SignUp failed........</p>}
            </header>
        )
    }
}

export {SignUp}