import React , { Component } from "react";
import fire from "../../firebaseConfig";
import styles from'./Login.module.css';


class Login extends Component{
constructor(props)
{
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state={
        email : "",
        password : ""
    }
}
login(e){
    e.preventDefault();
    
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{window.location.reload();
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{window.location.reload();
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}
render()
{global.SampleVar= true
 
    return( 
    <React.Fragment > 
        <div className={styles.App}>
            <h1>Welcome</h1>
            <form>
                <input 
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                onChange={this.handleChange}
                value={this.state.email}
                />
                
                <input
                name="password"
                type= "password"
                onChange={this.handleChange}
                id="password"
                placeholder="Password"
                value={this.state.password}
                />
                <button onClick={this.login }>Login</button>
                <button onClick={this.signup}>Signup</button>
            </form>

        </div></React.Fragment>
    )
}
}
export default Login;