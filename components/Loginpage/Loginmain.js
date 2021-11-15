import React, { Component } from 'react';
import fire from '../../firebaseConfig';
import Login from './Login'
import Home from './Home'
import styles from './Login.module.css';
class Loginmain extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      user : {},
      
    }
  }
  componentDidMount()
  {
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
        
      }
      else{
        this.setState({user : null})
      }
    })
  }

  render(){
    return (
      <div className={styles.App}>
        {this.state.user ? (<Home/>) : (<Login/>)}
      </div>
    );
  }
}

export default  Loginmain;
